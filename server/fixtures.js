if (Posts.find().count() == 0) {

  Posts.insert({
    originPlace : {
      'city': 'Bangaluru',
      'state': 'Karnataka',
      'nation': 'India'
    },
    time : 'timestamp',
    organisation : {
      full : 'Indian Space Research Organisation',
      short : 'ISRO'
    },
    postSourceType : 'official',
    postContext : 'national',
    postTitle : 'Openings for Junior Scientists/Engineers with BE/B.Tech or Equivalent Degree in the Disciplines of Civil, Refrigeration & AC and ELECTRICAL',
    callToAction : '',
    flagged: false
  });

  Posts.insert({
    originPlace : {
      'city': 'Delhi',
      'state': 'Delhi',
      'nation': 'India'
    },
    time : 'timestamp',
    organisation : {
      full : 'Delhi Jal Board',
      short : 'DJB'
    },
    postSourceType : 'official',
    postContext : 'state',
    postTitle : 'Due to limited availability, your region will have only one time water supply',
    callToAction : '',
    flagged: false
  });

  Posts.insert({
    originPlace : {
      'colony': 'Amar Colony',
      'ward': 'Lajpat Nagar 3',
      'municipality': 'Central Delhi',
      'city': 'Delhi',
      'state': 'Delhi',
      'nation': 'India'
    },
    time : 'timestamp',
    organisation : {
      full : 'Resident Welfare Association',
      short : 'RWA'
    },
    postSourceType : 'official',
    postContext : 'colony',
    postTitle : 'You are added to joinees list, detailed schedule will be shared with later',
    callToAction: '',
    flagged: false
  });

  Posts.insert({
    originPlace : {
      'colony': 'Revenue Colony',
      'ward': 'Lajpat Nagar 3',
      'municipality': 'Central Delhi',
      'city': 'Delhi',
      'state': 'Delhi',
      'nation': 'India'
    },
    time : 'timestamp',
    organisation : {
      full : 'Resident Welfare Association',
      short : 'RWA'
    },
    postSourceType : 'official',
    postContext : 'colony',
    postTitle : 'Greetings of Ganpati Visarjan. Congratulations everyone for great work together',
    callToAction: '',
    flagged: false
  });

  Posts.insert({
    originPlace : {
      'colony': 'R.P. niwas',
      'ward': 'advanced studies',
      'municipality': 'shimla',
      'city': 'shimla',
      'state': 'Himachal Pradesh',
      'nation': 'India'
    },
    time : 'timestamp',
    organisation : {
      full : 'Resident Welfare Association',
      short : 'RWA'
    },
    postSourceType : 'official',
    postContext : 'colony',
    postTitle : 'Yearly sports meet dates voting.',
    callToAction: '',
    flagged: false
  });

  Posts.insert({
    originPlace : {
      'colony': '',
      'ward': '',
      'municipality': '',
      'city': 'shimla',
      'state': 'Himachal Pradesh',
      'nation': 'India'
    },
    time : 'timestamp',
    organisation : {
      full : 'Himachal Pradesh State Electricity Board.',
      short : 'HPSEB'
    },
    postSourceType : 'official',
    postContext : 'state',
    postTitle : 'Good Rains ensured satisfactory power supplies this year. Zero power cuts this year.',
    callToAction: '',
    flagged: false
  });

  Posts.insert({
    originPlace : {
      'colony': '',
      'ward': '',
      'municipality': 'Pune',
      'city': 'Pune',
      'state': 'Maharashtra',
      'nation': 'India'
    },
    time : 'timestamp',
    organisation : {
      full : 'Pune Traffic Police',
      short : 'PTP'
    },
    postSourceType : 'official',
    postContext : 'municipal',
    postTitle : 'All traffic restrictions imposed for Ganpati Visarjan are now lifted.',
    callToAction: 'view restrictions',
    flagged: false
  });

}


if (Supports.find().count() == 0) {
  Supports.insert({
    postId: 'vPCTwc9GLkTxEBnML',
    supporters: [
      'ashish', 'karishma', 'nikhil', 'taran'
    ]
  });
}
