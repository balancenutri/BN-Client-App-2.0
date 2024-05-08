import { mysqlConnection } from "../db.js";

export const insertRecord = (table, columns, values) => {
  return (req, res) => {
    try {
      const insertQuery = `INSERT INTO ${table} (${columns}) VALUES (${values})`;
      mysqlConnection.query(insertQuery, (error, results, fields) => {
        if (error) {
          console.error("Error inserting data:", error);
          return res.status(500).json({ error: "Error inserting data" });
        }
        // res
        //   .status(200)
        //   .json({ message: "Data inserted successfully", data: results });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error inserting data" });
    }
  };
};

export const readRecord = (table, selectFields, arr_whereCondition) => {
  let whereCondition = Object.entries(arr_whereCondition)
    .map(([key, value]) => `${key} = '${value}'`)
    .join(" and ");

  return new Promise((resolve, reject) => {
    const selectQuery = `SELECT ${selectFields} FROM ${table} WHERE ${whereCondition}`;
    mysqlConnection.query(selectQuery, (error, results, fields) => {
      if (error) {
        console.error("Error selecting data:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export const updateRecord = (table, updateData, whereCondition) => {
  return (req, res) => {
    try {
      const updateQuery = `UPDATE ${table} SET ${updateData} WHERE ${whereCondition}`;
      mysqlConnection.query(updateQuery, (error, results, fields) => {
        if (error) {
          console.error("Error updating data:", error);
          return res.status(500).json({ error: "Error updating data" });
        }
        // res
        //   .status(200)
        //   .json({ message: "Data updated successfully", data: results });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error updating data" });
    }
  };
};

export const updateRecordMultipleWhere = (
  table,
  updateData,
  arr_whereCondition
) => {
  let whereCondition = Object.entries(arr_whereCondition)
    .map(([key, value]) => `${key} = '${value}'`)
    .join(" and ");

  //  console.log(whereCondition);

  try {
    const sql = `UPDATE ${table} SET ? WHERE ?`;
    const values = [updateData, whereCondition];

    mysqlConnection.query(sql, values, (error, results, fields) => {
      if (error) {
        console.error("Error updating data:", error);
        return res.status(500).json({ error: "Error updating data" });
      }
      return true;
      // res.status(200).json({ message: "Data updated successfully", data: results });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error updating data" });
  }
};

export const createUserFCMToken = (
  user_id,
  fcm_token,
  app_version,
  key,
  source,
  screen_name = ""
) => {
  let fields = [
    "count(id) as fcm_count",
    "id",
    "user_id",
    "fcm_token",
    "device",
    "status",
  ];
  let token_data = readRecord(process.env.TBL_BN_USER_FCM_TOKEN, fields, {
    user_id: user_id,
    fcm_token: fcm_token,
  })
    .then((token_data) => {
      console.log("token_data:", token_data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  if (
    screen_name == "client_log_out_screen" ||
    screen_name == "delete_user_screen"
  ) {
    fcm_data = {
      status: "0",
    };
    updateRecordMultipleWhere(process.env.TBL_BN_USER_FCM_TOKEN, fcm_data, {
      user_id: user_id,
      fcm_token: fcm_token,
    });

  } else {
    console.log(token_data)
    return false;

    if (
      token_data[0].fcm_count == 0 ||
      (token_data[0].user_id && token_data[0].fcm_token !== fcm_token)
    ) {
      console.log("true", true);
    }
  }
  return true;
};

// export const checkValidAuthKey = (auth_key) => {
//   return (req, res) => {
//     let AUTH_KEY = process.env.AUTH_KEY;
//     let val;
//     try {
//       if (md5(AUTH_KEY) == md5(auth_key)) {
//         val = 1;
//       } else {
//         val = 0;
//       }
//       if (val > 0) {
//         return true;
//       } else {
//         const errors = validationResult(req);

//         res.status(400).json({ status: false, message: errors });

//         return false;
//       }
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: "Error updating data" });
//     }
//   };
// };



// Mongo Common APIs
export const insertMongoData = async (req, res) => {
  const { collectionName, data } = req.body;

  // Validate collectionName and data

  await connectToMongoDB();

  try {
    // Create a new document based on the provided collectionName and data
    const newDocument = new Registration(data);

    // Save the new document to the specified collection
    const result = await newDocument.save();

    if (result) {
      res.status(201).json({ message: "Data saved successfully" });
    } else {
      throw new Error("Failed to insert data");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await closeMongoDBConnection();
  }
};