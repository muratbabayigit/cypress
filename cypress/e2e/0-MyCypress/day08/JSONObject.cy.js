describe('JSON_Object', () => {
    it('JSon Key Value', () => {
        cy.visit('https://www.google.com')

        const simpleObject={"key1":"deger1","key2":"deger2","key3":"deger3"}

        console.log(simpleObject.key2)
        console.log(simpleObject["key3"])

        const ArrayDegerler=["ali","Esma","Berk","Sena","Tarik"]

        console.log(ArrayDegerler[3])

        const ArrayDegerler2=[{"e1":"Murat","e2":"Enes","e3":"Kaan"},{"k1":"Sibel","k2":"Sena","k3":"Emine"}]

        console.log(ArrayDegerler2[0].e3)

        const body={
            "student":[{
                "firstName":"Esma",
                "secondname":"Sena",
                "lastName":"Yiğit",},
                {
                    "firstName":"Tarik",
                    "secondname":"Berk",
                    "lastName":"Yiğit","age":17}
         
            ]}

            console.log(body.student[1].age)
        })

        
    });
