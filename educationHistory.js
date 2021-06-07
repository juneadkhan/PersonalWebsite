export const loadDOM = function (listOfJobs) {
    const $workSection = $('#educSection');
  
    listOfJobs.forEach(job => {
      $workSection.append(workCard(job))
  
  
  
  });
  };
  
  export const workCard = function(job) {
    return `
    <style>
    #educContainer{
      background-color: black;
    }
    </style>
    <div class="card mb-5">
    <div class="container" id="educContainer">
    <div class="columns is-vcentered">
    <div class="column is-one-quarter">
    <div class="card-image">
      <figure class="image pl-5">
        <img src=${job.img} alt="Placeholder image">
      </figure>
    </div>
    </div>
    <div class="column is-one-half">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="is-size-4	has-text-info has-text-weight-bold">${job.companyName}</p>
          <p class="is-size-5 has-text-white has-text-weight-medium	">${job.jobTitle}</p>
          <p class="is-size-6 has-text-white">${job.dates}</p>
          <p class="is-size-6 has-text-white is-italic	">${job.location}</p>
          <p class="is-size-6 has-text-white pt-3">${job.bullet1}</p>
          <p class="is-size-6 has-text-white pb-3">${job.bullet2}</p>
          <div class="tags">
          ${job.tag1}
          ${job.tag2}
          ${job.tag3}
          ${job.tag4}
          ${job.tag5}
          ${job.tag6}
          ${job.tag7}
          ${job.tag8}
          </div>
        </div>
      </div>
    </div>
    
    </div>
    
    </div>
    
    </div>
      `
  }
  
  $(function () {
    loadDOM(workData);
  });
  
  /*
  SEE DATA BELOW
  */
  
  const workData = [
    {
    id: 1,
    companyName: "The University of North Carolina at Chapel Hill",
    jobTitle: "Bachelor of Science - BSPH Computer Science and Biostatistics",
    dates: "Minor in Neuroscience",
    location: "",
    img: "https://d1gntqhqj0rbcs.cloudfront.net/assets/111/whiteunclogo.png",
    bullet1: "",
    bullet2: "",
    tag1: ``,
    tag2: ``,
    tag3: ``,
    tag4: ``,
    tag5: ``,
    tag6: ``,
    tag7: ``,
    tag8: `` 
  }
  ];
  