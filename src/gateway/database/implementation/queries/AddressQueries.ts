export default {
    CREATE_NEW_ADDRESS: `
        INSERT INTO address (street, district, city, postal_code)
        VALUES (?,?,?,?)
    `
}