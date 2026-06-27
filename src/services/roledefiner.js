import dotent from 'dotenv'
dotent.config();

const validRole = async (req, res, next) => {
    let { role = 'client', isActive = false, company_name = '', billing_reference = '', secret_key = '', isStaff = false, staffCode = '' } = req.body;

    if (role == 'admin') {
        role = 'client';
        if (secret_key != '' && process.env.ADMIN_USER == secret_key) {
            req.body.role = 'admin',
                req.body.isActive = true;
        }
    }
    if ((role == 'agent' || role == 'supervisor') && isStaff && staffCode && process.env.INVITE_CODE == staffCode) {
        req.body.isActive = true;
    } else {
        req.body.role = 'client';
    }
    next();
}
export default validRole;