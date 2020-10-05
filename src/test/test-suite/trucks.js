export const validOutput = {
  errors: [],
  data: [
    {
      applicant: 'Street Meet',
      address: '564 HOWARD ST',
      latitude: '37.7875398934675',
      longitude: '-122.397726709152',
      distance: '2.033',
    },
    {
      applicant: "BOWL'D ACAI, LLC.",
      address: '15 MARINA BLVD',
      latitude: '37.8045778690901',
      longitude: '-122.433010774343',
      distance: '3.423',
    },
    {
      applicant: 'MOMO INNOVATION LLC',
      address: '160 PINE ST',
      latitude: '37.792524940842',
      longitude: '-122.399415781865',
      distance: '2.304',
    },
    {
      applicant: 'Treats by the Bay LLC',
      address: '201 02ND ST',
      latitude: '37.7868016505971',
      longitude: '-122.397871635003',
      distance: '1.975',
    },
    {
      applicant: 'MOMO INNOVATION LLC',
      address: '101 CALIFORNIA ST',
      latitude: '37.7929489528347',
      longitude: '-122.398098613167',
      distance: '2.416',
    },
  ]
};

export const invalidInput = {
  errors: [
    "instance.latitude must have a maximum value of 90",
    "instance.latitude must have a maximum value of 180"
  ],
  data: []
};
