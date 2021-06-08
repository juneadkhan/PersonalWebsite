export const loadDOM = function (listOfJobs) {
    const $workSection = $('#workSection');
  
    listOfJobs.forEach(job => {
      $workSection.append(workCard(job))
  });
  };
  
  export const workCard = function(job) {
    return `
    <div class="workCard mb-8 md:flex">
    <div class="md:w-1/3 mr-12 flex-none">
    <figure class="image mb-3 mr-5">
    <a href=${job.link} target="_blank"><img src=${job.img} alt="Placeholder image"></a>
  </figure>
      <p class="m-0 mt-1 leading-normal text-xl text-white opacity-50 font-bold">${job.jobTitle}</p>
      <p class="m-0 mt-1 leading-normal text-base text-white opacity-50">${job.dates}</p>
    </div>
    <div class="mt-2 md:mt-0 text-purpleLight">
      <p class="m-0 leading-normal text-xl"> ${job.bullet1}</p>

      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full uppercase last:mr-0 mr-1" style="background: #252222">
      ${job.tag}
    </span>
 
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
    companyName: "JP Morgan Chase & Co",
    jobTitle: "Incoming Software Engineer Intern",
    dates: "June 2021 to Present",
    location: "Bournemouth, UK",
    img: "https://jpmcsso.jpmorgan.com/sso/custom/web/components/APEX/images/Logo2008_JPMC_White.png",
    link: "https://www.jpmorganchase.com/",
    bullet1: "CIB Architecture Governance",
    bullet2: "",
    tag: 'Java'

  
    
  }, 
  {
    id: 2,
    companyName: "London School of Hygiene and Tropical Medicine",
    jobTitle: "Associate Research Consultant",
    dates: "February 2021 to Present",
    location: "London, UK",
    img: "https://www.lshtm.ac.uk/themes/custom/lshtm/images/logo-white.svg",
    link: "https://www.lshtm.ac.uk/",
    bullet1: "Collaborated with international partners across 3 countries (UK, US and China) for a study on elderly sexual health. Co-authored studies and directed analysis of the NATSAL and ELSA databases to garner and communicate insights from the largest and most detailed scientific studies of sexual behaviour in the world",
    bullet2: "",
    tag: "SAS, Python, Latent Class Analysis, Excel, JMP",
    tag1: `<span class="tag is-link is-light" style="background: #38373d;  color: #E2D5FE;">SAS</span>`,
    tag2: `<span class="tag is-link is-light" style="background: #38373d;  color: #E2D5FE;">Python</span>`,
    tag3: `<span class="tag is-success is-light" style="background: #38373d;  color: #E2D5FE;">Latent Class Analysis</span>`,
    tag4: ``,
    tag5: `<span class="tag is-danger is-light" style="background: #38373d;  color: #E2D5FE;">Excel</span>`,
    tag6: `<span class="tag is-danger is-light" style="background: #38373d;  color: #E2D5FE;">JMP</span>`,
    tag7: ``,
    tag8: ``
  
  
  },
  {
    id: 3,
    companyName: "Google Cloud",
    jobTitle: "Cloud Data Analyst Programme",
    dates: "July 2020 to August 2020",
    location: "Remote, USA",
    img: "https://www.aptusdatalabs.com/wp-content/uploads/2020/10/1200px-Google_Cloud_Logo.svg.png",
    link: "https://cloud.google.com/",
    bullet1: "Guided by Google Engineers to use Google Cloud Platform tools such as BigQuery, DataPrep and Data Studio. Analysed over 20 large public datasets using advanced SQL and other GCP tools to garner and communicate insights.",
    bullet2: "",
    tag: "SQL, Python, Machine Learning, BigQuery, Google Cloud Platform",
    tag1: `<span class="tag is-link is-light" style="background: #38373d;  color: #E2D5FE;">SQL</span>`,
    tag2: `<span class="tag is-link is-light" style="background: #38373d;  color: #E2D5FE;">Python</span>`,
    tag3: `<span class="tag is-success is-light" style="background: #38373d;  color: #E2D5FE;">Machine Learning</span>`,
    tag4: `<span class="tag is-success is-light" style="background: #38373d;  color: #E2D5FE;">Cloud Computing</span>`,
    tag5: `<span class="tag is-success is-light" style="background: #38373d;  color: #E2D5FE;">Data Visualization</span>`,
    tag6: `<span class="tag is-danger is-light" style="background: #38373d;  color: #E2D5FE;">BigQuery</span>`,
    tag7: `<span class="tag is-danger is-light" style="background: #38373d;  color: #E2D5FE;">Google Cloud Platform</span>`,
    tag8: ``
  
  },
  {
    id: 4,
    companyName: "The University of North Carolina at Chapel Hill",
    jobTitle: "Preventative Maintenance Technician",
    dates: "February 2020 to July 2020",
    location: "Chapel Hill, NC",
    img: "https://d1gntqhqj0rbcs.cloudfront.net/assets/111/whiteunclogo.png",
    link: "https://www.unc.edu/",
    bullet1: "Reduced downtime 15% by working with a team of 12 technicians to maintain ITS Hardware/Software in UNC Classrooms",
    bullet2: "",
    tag: "Hardware, Tech Support",
    tag1: `<span class="tag is-success is-light" style="background: #38373d;  color: #E2D5FE;">Hardware</span>`,
    tag2: `<span class="tag is-success is-light" style="background: #38373d;  color: #E2D5FE;">Tech Support</span>`,
    tag3: ``,
    tag4: ``,
    tag5: ``,
    tag6: ``,
    tag7: ``,
    tag8: ``
  }
  ];