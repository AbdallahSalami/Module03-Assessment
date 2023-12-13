// TransactionController.js
import { db } from "../Models/index.js";
const Article = db.Articles;



const addArticle= async (req, res) => {
        const { title,category,body,authorName,image,} = req.body;
    
    try {
        const article = await Article.create({
            
            title,
            category,
            body,
            authorName,
            image,
        })
        res.status(200).send(article)
        }

        catch (error) {
            console.error("Error creating Articles:", error);
            res.status(500).send("Internal Server Error");
        }   
    };    




// 2. Get all Articles
const getAllArticle= async (req, res) => {
    try {
        // Fetch all Articles
        let article = await Article.findAll({
            
        });

        // Check if there are no Articles
        if (article.length === 0) {
            res.status(404).send({ message: "No Articles in the database" });
            return;
        }

        res.status(200).send(article);
    } catch (error) {
        console.error("Error fetching Articles:", error);
        res.status(500).send(error.message);
    }
};

// 3. Get single Article
const getOneArticle= async (req, res) => {
    let id = req.params.id;
    try {
        let article = await Article.findOne({
            where: { id: id },
     
        });

        if (!article) {
            res.status(404).send({ message: "Articles not found" });
            return;
        }

        res.status(200).send(article);
    } catch (error) {
        console.error("Error fetching transaction:", error);
        res.status(500).send(error.message);
    }
};
// 4. Update Articles
const updateArticle = async (req, res) => {
    let id = req.params.id;
    const transaction = await Article.update(req.body, {where: { id: id } });
    res.status(200).send(transaction);
}

// 5. Delete Articles
const deleteArticle = async (req, res) => {
    let id = req.params.id;
    await Article.destroy({ where: { id: id } });
    res.status(200).send('User deleted');
}

export {
    addArticle,
    getAllArticle,
    getOneArticle,
    updateArticle,
    deleteArticle
};
