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
      data.map((project) => {
        projectContainer.innerHTML += `<div class="row mb-2">
          <div class="col-md-6 col-sm-12">
            <div class="project-left">
              <img
                class="card"
                src="${project.image}"
                alt="Screenshot-demo"
              />${
                project.data_science
                  ? '<div class="is-data-science text-center"><span>Data Science</span></div>'
                  : ""
              }
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="project-right">
              <h2>${project.title}</h2>
              <p>${project.desc}</p>
              ${project.techs
                .map(
                  (tech) =>
                    '<span class="badge text-bg-secondary rounded-pill">' +
                    String(tech) +
                    "</span>"
                )
                .join(" ")}
              <div class="my-2">
                <a href="${
                  project.demo
                }" class="btn btn-secondary" target="_blank">View Demo</a
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
