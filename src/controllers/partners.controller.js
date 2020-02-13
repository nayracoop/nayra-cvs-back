const partnersController = {}
const Partner = require ('../models/Partner')

partnersController.getPartners = async (req, res) => {
    const partners = await Partner.find();
    res.json(partners)
}

partnersController.createPartner = async (req, res) =>{
    const { name, slug, lastname, role, contactLinks, profile, technologies, experiences, languages } = req.body

    const newPartner = new Partner({
        name, 
        slug,
        lastname, 
        role, 
        contactLinks, 
        profile, 
        technologies, 
        experiences, 
        languages
    })
    await newPartner.save()
    res.json({message: "Partner saved!"})
    console.log(newPartner)
}

partnersController.getPartner = async (req, res) => {
    const partner = await Partner.findOne({ slug: req.params.slug })
    res.json(partner)
}

partnersController.getPartnerById = async (req, res) => {
    const partner = await Partner.findById( req.params.id )
    res.json(partner)
}

partnersController.updatePartner = async (req, res) => {
    const { name, slug, lastname, role, contactLinks, profile, technologies, experiences, languages } = req.body

    await Partner.findOneAndUpdate(req.params.id, {
        name, 
        slug,
        lastname, 
        role, 
        contactLinks, 
        profile, 
        technologies, 
        experiences, 
        languages
    });

    res.json({message: 'Partner updated!'})
}


partnersController.deletePartner = async(req, res) => {
    await Partner.findOneAndDelete(req.params.id)
    res.json({message: 'Partner deleted!'})
}

module.exports = partnersController