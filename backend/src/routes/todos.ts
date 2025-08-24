import { Router }  from 'express';
import GetAll      from '../controller/todos/getall';
import GetOne      from '../controller/todos/getone';
import NewTodo     from '../controller/todos/newtodo';
import UpdateTodo  from '../controller/todos/update';
import DeleteTodo  from '../controller/todos/deletetodo';

const router  = Router();
const BASEURL = '/api/todos';

router.get(BASEURL,             GetAll);
router.get(`${BASEURL}/:id`,    GetOne);
router.post(BASEURL,            NewTodo);
router.put(`${BASEURL}/:id`,    UpdateTodo );
router.delete(`${BASEURL}/:id`, DeleteTodo );

export default router;
