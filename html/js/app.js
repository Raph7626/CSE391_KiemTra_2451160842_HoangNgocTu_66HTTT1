// js/app.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addForm');
    const recordList = document.getElementById('recordList');
    const filterBtns = document.querySelectorAll('[data-filter]');

    let currentFilter = 'all';

    function getDonViName(code) {
        return code === "pgd_HD" ? "Phòng Giáo dục Hải Dương" : 
               code === "pgd_HN" ? "Phòng Giáo dục Hà Nội" : code;
    }

    function renderRecords(filteredRecords) {
        recordList.innerHTML = '';

        filteredRecords.forEach(record => {
            let badgeClass = '';
            let statusText = '';

            switch(record.trangThai) {
                case 'Done':
                    badgeClass = 'bg-success';
                    statusText = 'Hoàn thành';
                    break;
                case 'In Progress':
                    badgeClass = 'bg-warning text-dark';
                    statusText = 'Đang triển khai';
                    break;
                case 'Not Started':
                    badgeClass = 'bg-secondary';
                    statusText = 'Chưa bắt đầu';
                    break;
            }

            const html = `
                <div class="col-md-6 mb-3">
                    <div class="card h-100">
                        <div class="card-header ${badgeClass} text-white">
                            <strong>${record.tenTruong}</strong>
                        </div>
                        <div class="card-body">
                            <p><strong>Đơn vị:</strong> ${getDonViName(record.donVi)}</p>
                            <p><strong>Trạng thái:</strong> <span class="badge ${badgeClass}">${statusText}</span></p>
                            <p class="text-muted">${record.moTa}</p>
                        </div>
                    </div>
                </div>
            `;
            recordList.innerHTML += html;
        });
    }

    function filterRecords() {
        let filtered = records;
        if (currentFilter !== 'all') {
            filtered = records.filter(r => r.trangThai === currentFilter);
        }
        renderRecords(filtered);
    }

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            filterRecords();
        });
    });

    // Thêm hồ sơ mới
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newRecord = {
            id: Date.now(),
            tenTruong: document.getElementById('tenTruong').value.trim(),
            donVi: document.getElementById('donVi').value,
            trangThai: document.getElementById('trangThai').value,
            moTa: document.getElementById('moTa').value.trim() || "Chưa có mô tả."
        };

        if (!newRecord.tenTruong || !newRecord.donVi || !newRecord.trangThai) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        records.unshift(newRecord);
        filterRecords();
        form.reset();
        alert("✅ Thêm hồ sơ thành công!");
    });

    // Khởi tạo
    filterBtns[0].classList.add('active');
    renderRecords(records);
});