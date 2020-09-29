import { Request, Response, NextFunction } from "express";
import { ContactController } from "../controller/crmController";

export class Routes {

    public contactController: ContactController = new ContactController()

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })

        // Create a new contact
        app.route('/contact')
            .post(this.contactController.addNewContact);

        // Get all contacts
        app.route('/contact')
            .get(this.contactController.getContacts)

        // get a specific contact
        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID)

        // update a specific contact
        app.route('/contact/:contactId')
            .put(this.contactController.updateContact)

        // delete a specific contact
        app.route('/contact/:contactId')
            .delete(this.contactController.deleteContact)

    }
}

