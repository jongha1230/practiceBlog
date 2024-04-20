document.addEventListener("DOMContentLoaded", function() {
    // 페이지가 로드될 때 '홈' 메뉴를 활성화
    switchTab('home');
});

// .header-list 클릭된 상태 스타일 처리
function switchTab(menuId) {
    // 모든 메뉴 항목에 'clicked' 클래스를 제거
    const menuItems = document.querySelectorAll('.header-list li');
    menuItems.forEach(function(item) {
        item.classList.remove('clicked');
    });

    // 클릭된 메뉴 항목에 'clicked' 클래스를 추가
    const clickedItem = document.getElementById(menuId);
    clickedItem.classList.add('clicked');

    // 선택된 섹션을 표시하고, 나머지 섹션은 숨기기
    const sections = document.querySelectorAll('.post-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    const selectedSection = document.getElementById(menuId + 'Content');
    selectedSection.style.display = 'block';
}


