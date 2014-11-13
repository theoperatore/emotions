module.exports = [
  {
    name : "DOG!",
    reqs : []
  },
  {
    name : "Lost Dog",
    reqs : [
      {
        event : "DOG!"
      }
    ]
  },
  {
    name : "Found Lost Dog",
    reqs : [
      {
        event : "Lost Dog"
      }
    ]
  },
  {
    name : "Lost Job",
    reqs : [
      {
        event : "Gained Job"
      }
    ]
  },
  {
    name : "Gained Job",
    reqs : []
  }
];