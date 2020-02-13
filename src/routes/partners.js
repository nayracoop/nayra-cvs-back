const { Router } = require ('express')
const router = Router()

const { getPartners, createPartner, getPartnerById, getPartner, deletePartner, updatePartner} = require('../controllers/partners.controller')

router.route('/') 
    .get(getPartners)
    .post(createPartner)

router.route('/crud/:id')
    .get(getPartnerById)
    .delete(deletePartner)
    .put(updatePartner)

router.route('/:slug')
    .get(getPartner)


module.exports = router