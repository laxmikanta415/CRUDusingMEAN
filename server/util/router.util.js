module.exports = function(router,controller){
    router.param('id',controller.params);
    
    router.route('/').get(controller.get).post(controller.post);
    
    
    router.route('/:id').get(controller.getOne).patch(controller.patch).delete(controller.delete);
}