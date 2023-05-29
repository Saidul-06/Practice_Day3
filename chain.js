const user = [{ name: "saidul", Id: 27, add: "Bangladesh" }];
console.log(user[0].name);

const users_object = {
  Name: "saidul",
  data: [
    { name: "saidul", Id: 27, add: "Bangladesh" },
    { name: "saidul", Id: 27, add: "Bangladesh" },
  ],
};

console.log(users_object.data[1].name);

const user1 = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}

const userfloor = user1.address.street?.second;
console.log(user1.address.street.second);