import { json } from 'express';
import toursCOMP from '../components/toursCOMP.js';

export default class ToursController{ 
  static async apiGetAllTours(req, res, next) {
    const toursPerPage = 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    const filters = null;

    const { tourList, totalNumTours } = await toursCOMP.getTours({
      filters, page, toursPerPage
    });

    let response = {
      tours : tourList,
      totalNum : totalNumTours,
    };

    res.json(response);
  }
}