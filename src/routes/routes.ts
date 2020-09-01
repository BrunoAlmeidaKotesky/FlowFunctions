
import express from 'express';
const routes = express.Router();
import RegexRoutes from './RegexRoutes';
import ArrayRoutes from './ArrayRoutes';

routes.post('/regex/replace', RegexRoutes.replace);
routes.post('/regex/matchall', RegexRoutes.matchAll)
routes.post('/regex/test', RegexRoutes.test);
routes.post('/arr/excludeMatch', ArrayRoutes.excludeMatch);
export default routes;