const mayCohort = {
  id: 1234,
  name: "May2022",
  students: ["Bruce", "Clark", "Diana", "Barry", "Hal"],
};

const printCohort = (cohort) => {
  console.log(
    `${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`
  );
};

printCohort(mayCohort);
