document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});
const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  item.querySelector(".faq-header").addEventListener("click", () => {

    items.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        const icon = i.querySelector(".icon");
        if (icon) icon.textContent = "+";
      }
    });

    item.classList.toggle("active");
    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "×" : "+";
  });
});
