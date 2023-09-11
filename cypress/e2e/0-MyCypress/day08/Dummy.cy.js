describe('Dummy Assertion', () => {
    /*
     {
      "id": 14,
      "employee_name": "Haley Kennedy",
      "employee_salary": 313500,
      "employee_age": 43,
      "profile_image": ""
    }

    */
    it('Dummy assert', () => {
        cy.request('https://dummy.restapiexample.com/api/v1/employees')
        .should((response =>{

        assert.equal(response.body.data[13].id,14)
        assert.equal(response.body.data[13].employee_age,43)
        assert.equal(response.body.data[13].employee_name,'Haley Kennedy')
        }))
        
    });
    
});