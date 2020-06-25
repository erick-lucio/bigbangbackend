

module.exports ={
    async configDatabase(req, res) {    
        const verify_state = await Estado.findAll({
            atributes:['name'],
            where:{
                name:"AC"
            }
        })
        if(verify_state.length == 0){
            const insert_states = await Estado.bulkCreate(estados);
        }
        const verify_super_admin = await Usuarios.findAll({
            atributes:['email'],
            where:{
                email:"email@email.com"
            }
        })
        if(verify_super_admin.length == 0){
            const insert_users = await Usuarios.create({
                name:"adminErick",
                password:await bcrypt.hash("yuri20323", 10),
                email:"email@email.com",
                permission:"2"
            })
        }
        const verify_product_category = await Product_Category.findAll({
            atributes:['name'],

        })
        if(verify_product_category.length == 0){
            const insert_product_category = await Product_Category.bulkCreate(products_category);
        }
        const insert_users = await Product.create({
            name:"Bateria",
            description:"Bateria de litium 5V",
            product_category_id:1,
            
        })
        res.status(200).send("Sucess") ;
      },
      async testeFunction(req, res) {    

    

        console.log(root_path)
        res.status(200).sendFile('/src/imgRepository/Instagran_icon.png', { root:root_path }) ;
      },
}
/*
Acre 	AC 	Rio Branco
Alagoas 	AL 	Maceió
Amapá 	AP 	Macapá
Amazonas 	AM 	Manaus
Bahia 	BA 	Salvador
Ceará 	CE 	Fortaleza
Distrito Federal 	DF 	Brasília
Espírito Santo 	ES 	Vitória
Goiás 	GO 	Goiânia
Maranhão 	MA 	São Luís
Mato Grosso 	MT 	Cuiabá
Mato Grosso do Sul 	MS 	Campo Grande
Minas Gerais 	MG 	Belo Horizonte
Pará 	PA 	Belém
Paraíba 	PB 	João Pessoa
Paraná 	PR 	Curitiba
Pernambuco 	PE 	Recife
Piauí 	PI 	Teresina
Rio de Janeiro 	RJ 	Rio de Janeiro
Rio Grande do Norte 	RN 	Natal
Rio Grande do Sul 	RS 	Porto Alegre
Rondônia 	RO 	Porto Velho
Roraima 	RR 	Boa Vista
Santa Catarina 	SC 	Florianópolis
São Paulo 	SP 	São Paulo
Sergipe 	SE 	Aracaju
Tocantins 	TO 	Palmas


*/