const client = require("../db");
const { v4 } = require('uuid');



export class SectionsModel {

    fetchSections = async () => {
        let query = `SELECT * FROM sections`;
        let response;
        try {
            const res = await client.query(query);
            response = res.rows;
        } catch(err: any) {
            // console.log(err.stack);
            response = {'error': err.stack};
        }
    
        return response
    }
    
    addSection = async (title: string, imgURL: string) => {
        let query = `INSERT INTO sections (id, title, imgurl) VALUES ('${v4()}', '${title}', '${imgURL}') RETURNING *`;
        let response;
        try {
            let res = await client.query(query);
            response = res.rows;
        } catch(err: any) {
            // console.log(err.stack);
            response = {'error': err.stack};
        }
        
        return response
    }

    updateTitle = async (id: string, title: string) => {
        let query = `UPDATE sections SET title = ${title} WHERE id = ${id} RETURNING *`;
        let response;
        try {
            let res = await client.query(query);
            response = res.rows;
        } catch(err: any) {
            // console.log(err.stack);
            response = {'error': err.stack};
        }
        
        return response
    }

    updateImgurl = async (imgURL: string, id: string) => {
        let query = `UPDATE sections SET imgurl = ${imgURL} WHERE id = ${id} RETURNING *`;
        let response;
        try {
            let res = await client.query(query);
            response = res.rows;
        } catch(err: any) {
            // console.log(err.stack);
            response = {'error': err.stack};
        }
        
        return response
    }

    update = async (id: string, newValue: string, type: string) => {
        let response;
        if (type === 'title') {
            response = await this.updateTitle(id, newValue);
        }else if (type === 'imgurl') {
            response = await this.updateImgurl(id, newValue)
        }

        return response;
    }

}