async function connect() {
  try {
    const con = await mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database: "test",
    });

    console.log("Connected bro");
  } catch (e) {
    console.log("e");
  }
}

// const connection= mysql.createConnection({
//     host: 'jdbc:mysql://topsectiondb:3306',
//     user: 'root',
//     password: 'rootpass'
//   })

module.exports = connect;
