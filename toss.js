document.addEventListener("DOMContentLoaded", function () {
  const mainLogo = document.getElementById("refresh");

  mainLogo.addEventListener("click", function () {
    location.reload(); // 페이지를 새로고침
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.querySelector(".scroll-button");
  const mainTextSection = document.querySelector(".main-text");

  scrollButton.addEventListener("click", function () {
    // Calculate the offset of the main text section from the top of the page
    const offsetTop = mainTextSection.offsetTop;

    // Scroll to the offsetTop of the main text section with smooth behavior
    window.scrollTo({
      top: offsetTop - (window.innerHeight - mainTextSection.clientHeight) / 2, // 섹션 글자를 스크롤 창의 가운데에 맞춤
      behavior: "smooth"
    });
  });
});