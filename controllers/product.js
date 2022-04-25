'use strict';
const db = require('../models');
const productModel = db.Product;
const brandModel = db.Brand;

//get data product all
exports.get = (req, res) => {
    db.Product.findAll({
        include: [
            {
                model: db.ProductImages
            },
            {
                model: db.ProductBaseRelation,
                include: [
                    {
                        model: db.Brand,
                    },
                    {
                        model: db.Category,
                    },
                    {
                        model: db.Collection,
                    },
                ]
            },
        ],
        // order: [
        //     ['name', 'ASC']
        // ],
    })
    .then(data => {
        res.status(200).json({
            responseCode: 200,
            responseMessage: 'OK',
            responseData: data,
        });
    })
    .catch(err => {
        res.status(500).json({
            responseCode: 500,
            responseMessage: "Error",
            responseData: err,
        });
    })
};



exports.getId = (req, res) => {
    productModel.findAll({ 
      where: {
        id: req.params.id
      },
      include: [
        {
          model: db.ProductImages
        },
        { 
          model: db.ProductBaseRelation,
          include: [
            {
              model: db.Brand,
            },
            {
              model: db.Category,
            },
            {
              model: db.Collection,
            }
          ]
        },
      ],
    })
    .then(data => {
      res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
    })
    .catch(err => {
        res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
    });
  };
  
  

// exports.getCategory = (req, res) => {
//     db.Product.findAll({ 
//       where :{
//         '$ProductBaseRelation.Category.name$' : req.params.name,
//       },
//       include: [
//         {
//           model: db.ProductImages /// chú ý sai n lần cái ProductImage thêm s rồi
//         },
//         { 
//           model: db.ProductBaseRelation,
//           include: [
//             {
//               model: db.Brand,
//             },
//             {
//               model: db.Category,
//             },
//             {
//               model: db.Collection,
//             },
//           ]
//         },
//       ]
//     //   order: [
//     //     ['name', 'ASC']
//     //   ],
//     })
//     .then(data => {
//       res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
//     })
//     .catch(err => {
//         res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
//     });
//   };
  
  exports.getCategory = (req, res) => {
    productModel.findAll({ 
      where: {
        '$ProductBaseRelation.Category.name$': req.params.name,
      },
      include: [
        {
          model: db.ProductImages
        },
        { 
          model: db.ProductBaseRelation,
          include: [
            {
              model: db.Brand,
            },
            {
              model: db.Category,
            },
            {
              model: db.Collection,
            }
          ]
        },
      ],
      order: [
        ['name', 'ASC']
      ],
    })
    .then(data => {
      res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
    })
    .catch(err => {
        res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
    });
  };
  
  exports.create = (req, res) => {
    var _user = req.body;
    if(!_user.fullName || !_user.phoneNumber || !_user.email || !_user.password ){
      res.status(500).json({responseCode : 500, responseMessage : "Error", responseData :  "Bad request to server."});
      return;
    }
  
    var userData = {
      UserName: _user.fullName,
      FullName: _user.fullName,
      Email: _user.email,
      Phone: _user.phoneNumber,
      Password: _user.password
    }
    productModel.create(userData)
      .then(data => {
        res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: [data]});
      })
      .catch(err => {
        res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
      });
  };
  
  
  



//get data product by category id
// exports.getByCategoryId = (req, res) => {
//     db.Product.findAll({
//         where :{
//             '$ProductBaseRelation.Category.id$' : req.params.id
//         },
//         include: [
//             {
//                 model: db.ProductImages
//             },
//             {
//                 model: db.ProductBaseRelation,
//                 include: [
//                     {
//                         model: db.Brand,
//                     },
//                     {
//                         model: db.Category,
//                     },
//                     {
//                         model: db.Collection,
//                     },
//                 ]
//             },
//         ]
//     })
//     .then(data => {
//         res.status(200).json({
//             responseCode: 200,
//             responseMessage: 'OK',
//             responseData: data,
//         });
//     })
//     .catch(err => {
//         res.status(500).json({
//             responseCode: 500,
//             responseMessage: "Error",
//             responseData: err,
//         });
//     })
// };


// //get data product by brand id
// exports.getByBrandId = (req, res) => {
//     db.Product.findAll({
//         where :{
//             '$ProductBaseRelation.Brand.id$' : req.params.id
//         },
//         include: [
//             {
//                 model: db.ProductImages
//             },
//             {
//                 model: db.ProductBaseRelation,
//                 include: [
//                     {
//                         model: db.Brand,
//                     },
//                     {
//                         model: db.Category,
//                     },
//                     {
//                         model: db.Collection,
//                     },
//                 ]
//             },
//         ]
//     })
//     .then(data => {
//         res.status(200).json({
//             responseCode: 200,
//             responseMessage: 'OK',
//             responseData: data,
//         });
//     })
//     .catch(err => {
//         res.status(500).json({
//             responseCode: 500,
//             responseMessage: "Error",
//             responseData: err,
//         });
//     })
// };


// //get data product by collection id
// exports.getByCollectionId = (req, res) => {
//     db.Product.findAll({
//         where :{
//             '$ProductBaseRelation.Collection.id$' : req.params.id
//         },
//         include: [
//             {
//                 model: db.ProductImages
//             },
//             {
//                 model: db.ProductBaseRelation,
//                 include: [
//                     {
//                         model: db.Brand,
//                     },
//                     {
//                         model: db.Category,
//                     },
//                     {
//                         model: db.Collection,
//                     },
//                 ]
//             },
//         ]
//     })
//     .then(data => {
//         res.status(200).json({
//             responseCode: 200,
//             responseMessage: 'OK',
//             responseData: data,
//         });
//     })
//     .catch(err => {
//         res.status(500).json({
//             responseCode: 500,
//             responseMessage: "Error",
//             responseData: err,
//         });
//     })
// };
