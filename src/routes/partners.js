const { Router } = require ('express')
const router = Router()

const { getPartners, createPartner, getPartnerById, getPartner, deletePartner} = require('../controllers/partners.controller')

router.route('/') 
    .get(getPartners)
    .post(createPartner)

router.route('/crud/:id')
    .get(getPartnerById)
    .delete(deletePartner)

router.route('/:slug')
    .get(getPartner)
    // .post(createPartner)
    // .put(updatePartner)


module.exports = router