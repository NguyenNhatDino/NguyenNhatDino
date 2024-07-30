// Hàm kiểm tra thiết bị di động
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Hiển thị thông báo nếu là thiết bị di động
window.onload = function() {
    if (isMobileDevice()) {
        // Tạo một phần tử div để chứa thông báo
        var alertDiv = document.createElement('div');
        alertDiv.id = 'mobile-alert';
        alertDiv.style.position = 'fixed';
        alertDiv.style.top = '0';
        alertDiv.style.left = '0';
        alertDiv.style.width = '100%';
        alertDiv.style.height = '100%';
        alertDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        alertDiv.style.display = 'flex';
        alertDiv.style.justifyContent = 'center';
        alertDiv.style.alignItems = 'center';
        alertDiv.style.zIndex = '1000';

        // Tạo một phần tử div con để chứa nội dung thông báo
        var alertContent = document.createElement('div');
        alertContent.style.backgroundColor = 'white';
        alertContent.style.padding = '20px';
        alertContent.style.borderRadius = '10px';
        alertContent.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        alertContent.style.textAlign = 'center';

        // Thêm nội dung vào thông báo
        alertContent.innerHTML = `
            <h2>Thông Báo</h2>
            <p>Trang web này không hỗ trợ truy cập trên thiết bị di động. Vui lòng truy cập trên máy tính để bàn hoặc laptop.</p>
        `;

        // Thêm nội dung thông báo vào alertDiv
        alertDiv.appendChild(alertContent);

        // Thêm alertDiv vào body của trang
        document.body.appendChild(alertDiv);
    }
};
