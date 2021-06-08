export const loadDOM = function (listOfJobs) {
    const $projectSection = $('#dribbble-shots');
  
    listOfJobs.forEach(project => {
      $projectSection.append(projectCard(project))
    });
  
  };
  
  export const projectCard = function(project) {
    return `
    
    <div class="dribbble-shot">
    

    <div class="grid grid-cols-2 gap-4">
    <div>
      <h4><a rel="noreferrer" target="_blank" href="https://github.com/nikhil-vytla/COVID-19" title="COVID-tivity">${project.name}</a></h4>
      <p>${project.description}</p>
      
      <ul class="flex items-center relative my-2" style="top: 2px;">
      <li class="mr-2">
      <a aria-label="GitHub" class="social-link-3" data-platform="github" href="https://github.com/nikhil-vytla" target="_blank" rel="noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: green">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#FCD6E9"/>
                  </svg>
      </a>
      </li>

      <li class="mr-2">
      <a aria-label="LinkedIn" class="social-link-3" data-platform="linkedin" href="https://linkedin.com/in/nikhil-vytla" target="_blank" rel="noreferrer">
      <svg class="svg-icon" viewBox="0 0 20 20">
      <path fill="none" d="M16.198,10.896c-0.252,0-0.455,0.203-0.455,0.455v2.396c0,0.626-0.511,1.137-1.138,1.137H5.117c-0.627,0-1.138-0.511-1.138-1.137V7.852c0-0.626,0.511-1.137,1.138-1.137h5.315c0.252,0,0.456-0.203,0.456-0.455c0-0.251-0.204-0.455-0.456-0.455H5.117c-1.129,0-2.049,0.918-2.049,2.047v5.894c0,1.129,0.92,2.048,2.049,2.048h9.488c1.129,0,2.048-0.919,2.048-2.048v-2.396C16.653,11.099,16.45,10.896,16.198,10.896z"></path>
      <path fill="none" d="M14.053,4.279c-0.207-0.135-0.492-0.079-0.63,0.133c-0.137,0.211-0.077,0.493,0.134,0.63l1.65,1.073c-4.115,0.62-5.705,4.891-5.774,5.082c-0.084,0.236,0.038,0.495,0.274,0.581c0.052,0.019,0.103,0.027,0.154,0.027c0.186,0,0.361-0.115,0.429-0.301c0.014-0.042,1.538-4.023,5.238-4.482l-1.172,1.799c-0.137,0.21-0.077,0.492,0.134,0.629c0.076,0.05,0.163,0.074,0.248,0.074c0.148,0,0.294-0.073,0.382-0.207l1.738-2.671c0.066-0.101,0.09-0.224,0.064-0.343c-0.025-0.118-0.096-0.221-0.197-0.287L14.053,4.279z"></path>
    </svg>
      </a>
    </li>

    <span class="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-amber-600 bg-amber-200 uppercase last:mr-0 mr-1" style="background: #0f0f0f">
    ${project.tag}
  </span>
      </ul>

                
      
    </div>

    <div>
    <img src="${project.img}"  class="object-cover h-36 w-36 w-full">
    </div>
  

    </div>



    </div>
    `
  }
  
  $(function () {
    loadDOM(projectData);
  });
  
  /*
  SEE DATA BELOW
  */
  
  const projectData = [
    {
    id: 1,
    name: "pixelpedia",
    description: "A website that lets you explore the world's best hidden crowdsourced photo spots using an interactive map based UI.",
    img: "https://pixelpedia-images.s3.amazonaws.com/pixelpedia+(9).png",
    tag: "React/MapBox/AWS"
  },
  {
    id: 2,
    name: "GPAce",
    description: "An iOS application that lets you enter the classes you took and then tracks and calculates your overall GPA.",
    img: "https://github.com/juneadkhan/GPACalculator/blob/master/GpAce.png?raw=true",
    tag: "Swift/iOS"

  },
  {
    id: 3,
    name: "2048",
    description: "Recreation of the popular 2048 game using JavaScript and jQuery.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png",
    tag: "jQuery, JS, Bulma"
  },
  {
    id: 4,
    name: "The Homework REPL",
    description: "An easy to use declarative REPL for quick High-School Homework Calculations using Python, Google CoLab and Jupyter Notebook",
    img: "data:image/png;base64,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"
    , tag: "Python, Jupyter"
  },
  ];