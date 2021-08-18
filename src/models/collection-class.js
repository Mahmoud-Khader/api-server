'use strict';


class Collection{
    constructor(model){
        this.model=model;
    }

    //Get All Data Function 
    async getAll() {
        let record = await this.model.findAll();
        return record;
    }
    
    // Get One  Function
    async getOne(id) {
        
        let record = await this.model.findOne({ where: { id: id } });
        return record;
        
    }
    
    // create  Function
    
    async create(modelInfo) {
        
        let record = await this.model.create(modelInfo);
        return record;
        
    }
    
    // Update  Fucntion
    
    async update(id, modelInfo) {
        let record = await this.model.findOne({ where: { id } });
        let updateRecord = await record.update(modelInfo);
        return  updateRecord;
    }
    //Delete Function
    
    async delete(id) {
        
        await this.model.destroy({ where: { id: id } });
        
    }
    
}
    module.exports = Collection;