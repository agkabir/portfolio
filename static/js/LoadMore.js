const loadBtn = document.getElementById("show-more");
const spinner = document.getElementById("spinner");
const alert = document.getElementById("alert");
const total = JSON.parse(document.getElementById("json-total").textContent);
function loadMoreProjects() {
  const currentProjects = $(".project-left").length;
  const projectContainer = document.getElementById("project-content");
  $.ajax({
    url: "/load-more/",
    type: "GET",
    data: { offset: currentProjects, csrfmiddlewaretoken: "{{ csrf_token }}" },
    beforeSend: function () {
      loadBtn.classList.add("not-visible");
      spinner.classList.remove("not-visible");
    },
    success: function (response) {
      const data = response.projects;
      spinner.classList.add("not-visible");
      data.map((project, idx) => {
        projectContainer.innerHTML += `<div class="col-md-6">
            <div class="border-2 mb-4">
              <div class="${idx % 2 == 0 ? "project-left" : "project-right"}">
              <img
                class="card-img-top rounded-2 mb-3"
                src="${project.image}"
                alt="${project.title}"
              />${
                project.data_science
                  ? '<span class="is-data-science text-center"> Data Science </span>'
                  : ""
              }
            </div>
          <div class="${idx % 2 == 0 ? "project-left" : "project-right"}">
              <h4 class="card-title">${project.title}$</h4>
              <p class="card-text">${project.desc}</p>
              ${project.techs
                .map(
                  (tech) =>
                    '<span class="badge text-bg-secondary rounded-pill">' +
                    String(tech) +
                    "</span>"
                )
                .join(" ")}
              <div class="my-2">
                <a href="${project.demo}" class="btn btn-secondary"
                   target="_blank">View Demo</a
                >
                <a href="${
                  project.source
                }" class="btn btn-secondary" target="_blank">Code</a>
              </div>
            </div>
          </div>
        </div>`;
      });
      if (currentProjects + 2 >= total) {
        alert.classList.remove("not-visible");
      } else {
        loadBtn.classList.remove("not-visible");
      }
    },
    error: function (err) {
      console.log(err);
    },
  });
}
loadBtn.addEventListener("click", () => {
  loadMoreProjects();
});
