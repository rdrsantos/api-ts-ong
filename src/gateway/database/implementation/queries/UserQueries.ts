export default {
    FIND_ALL_USERS: `
        SELECT * FROM user;
    `,
    CREATE_NEW_USER: `
        INSERT INTO user (full_name, email, password, gender, avatar_url)
        VALUES (?,?,?,?,?)
    `
}