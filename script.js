function createCalendar() {
    const calendar = document.getElementById('calendar');
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    // Tên các tháng và thứ trong tuần
    const monthNames = [
        'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
        'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
    ];
    
    const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    
    // Tạo header calendar
    const header = document.createElement('div');
    header.className = 'calendar-header';
    header.innerHTML = `<h2>${monthNames[currentMonth]} ${currentYear}</h2>`;
    
    // Tạo header cho các thứ trong tuần
    const weekHeader = document.createElement('div');
    weekHeader.className = 'week-header';
    dayNames.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'day-name';
        dayElement.textContent = day;
        weekHeader.appendChild(dayElement);
    });
    
    // Tạo grid cho các ngày
    const daysGrid = document.createElement('div');
    daysGrid.className = 'days-grid';
    
    // Lấy ngày đầu tiên của tháng và số ngày trong tháng
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Thêm các ô trống cho những ngày của tháng trước
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day empty';
        daysGrid.appendChild(emptyDay);
    }
    
    // Thêm các ngày trong tháng
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        
        // Highlight ngày hiện tại
        if (day === now.getDate()) {
            dayElement.className += ' today';
        }
        
        daysGrid.appendChild(dayElement);
    }
    
    // Xóa nội dung cũ và thêm calendar mới
    calendar.innerHTML = '';
    calendar.appendChild(header);
    calendar.appendChild(weekHeader);
    calendar.appendChild(daysGrid);
}

// Tạo calendar khi trang được load
document.addEventListener('DOMContentLoaded', createCalendar); 