document.addEventListener("DOMContentLoaded", function() {
    // 페이지가 로드될 때 '홈' 메뉴를 활성화합니다.
    toggleMenu('home');
});

// .header-list 클릭된 상태 스타일 처리
function toggleMenu(menuId) {
    // 모든 메뉴 항목에 'clicked' 클래스를 제거합니다.
    var menuItems = document.querySelectorAll('.header-list li');
    menuItems.forEach(function(item) {
        item.classList.remove('clicked');
    });

    // 클릭된 메뉴 항목에 'clicked' 클래스를 추가합니다.
    var clickedItem = document.getElementById(menuId);
    clickedItem.classList.add('clicked');

    // 선택된 섹션을 표시하고, 나머지 섹션은 숨깁니다.
    var sections = document.querySelectorAll('.post-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    var selectedSection = document.getElementById(menuId + 'Content');
    selectedSection.style.display = 'block';
}