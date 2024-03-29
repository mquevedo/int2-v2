const data = [
  {
    name:'René García',
    pics: {
      large: `${process.env.PUBLIC_URL}/images/alumni/alumni-rene.jpg`,
      circle: `${process.env.PUBLIC_URL}/images/alumni/alumni-rene-circle.png`
    },
    year: '2014',
    bio: [
      {year:'2007',text: 'Graduated from Externado San Jose´s High School.'},
      {year:'2014/2015',text: 'Selected for the Int2 program , René joined GenUI´s team in Seattle.'},
      {year:'2014/2015',text: 'René presented the first iteration of his Startup “Samaritan” during a hackathon.'},
      {year:'2016',text: 'Obtained his Computer Science Engineering diploma.'},
      {year:'2017/2018',text: 'Based in El Salvador, René is working at Samaritan as the Chief Technology Officer.'}
    ], 
  },
  {
    name:'Juan Moreno',
    pics:{
      large: `${process.env.PUBLIC_URL}/images/alumni/alumni-juan.jpg`,
      circle: `${process.env.PUBLIC_URL}/images/alumni/alumni-juan-circle.png`
    },
    year: '2015',
    bio: [
      {year:'2007',text: 'Graduated from Liceo Salvadoreño´s High School.'},
      {year:'2015/2016',text: 'Selected for the Int2 program , Juan traveled to Seattle to join the company TUNE´s team as an intern.'},
      {year:'2017/2018',text: 'After coming back to El Salvador, Juan decided to take advantage of his new knowledge by building his own startup, the streaming application “Teleunidos”.'},
    ],
  },
  {
    name:'Carlos Alvarado',
    pics:{
      large: `${process.env.PUBLIC_URL}/images/alumni/alumni-carlos.jpg`,
      circle: `${process.env.PUBLIC_URL}/images/alumni/alumni-carlos-circle.png`
    },
    year: '2016',
    bio: [
      {year:'2007',text: 'Graduated from Joya de Cerén High School.'},
      {year:'2009',text: 'Graduated from the Engineering Specialized School (ITCA) and was awarded with the Outstanding Student Recognition.'},
      {year:'2010',text: 'Joined Francisco Gavidia University´s Bachelor of Science in Administrative Computing Systems program.'},
      {year:'2016/2017',text: 'Selected for the Int2 program, Carlos traveled to Seattle to work for GenUI.'},
      {year:'2017/2018',text: 'After coming back to El Salvador, Carlos worked as a programmer for a year before being promoted to Project Manager of  GenUI´s International Clients.'}
    ],
  },
  {
    name:'Scarlett Tejada',
    pics: {
      large: `${process.env.PUBLIC_URL}/images/alumni/alumni-scarlett.jpg`,
      circle: `${process.env.PUBLIC_URL}/images/alumni/alumni-scarlett-circle.png`
    },
    year: '2017',
    bio: [
      {year:'2008',text: 'Graduated Externado San Jose´s High School.'},
      {year:'2013',text: 'Joined Francisco Gavidia University´s Computer Science Engineering program.'},
      {year:'2016/2017',text: 'Selected for the Int2 Intership, Scarlett traveled to Seattle where she worked for TUNE and GenUI.'},
      {year:'2018',text: 'Currently Scarlett works from El Salvador as a programmer for GenUI.'},
    ],
  },
  {
    name:'Stanley Jovel',
    pics: {
      large: `${process.env.PUBLIC_URL}/images/alumni/alumni-stanley.jpg`,
      circle: `${process.env.PUBLIC_URL}/images/alumni/alumni-stanley-circle.png`
    },
    year: '2017',
    bio: [
      {year:'2012',text: 'Graduated High School.'},
      {year:'2013',text: 'Obtained Technical degree'},
      {year:'2017',text: 'Selected for the Int2 Internship in GenUI, he traveled to Seattle. Starting as a jr web developer  he soon became a Full Stack Engineer.'},
      {year:'2018',text: 'Graduated from Software Engineer in Computer Science in Universidad Don Bosco In 2018.'},
      {year:'2018',text: 'Currently based in El Salvador, Stanley continues developing web and mobile solutions.'},
    ],
  },
]

export default data
