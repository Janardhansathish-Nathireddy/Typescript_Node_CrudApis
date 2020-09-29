import { Request, Response } from "express";
import { ContactController } from "../controller/"

export class Routes {

    public contactController: ContactController = new ContactController();
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.send({
                    status: true,
                    message: 'GET request successfulll!!!!'
                })
            })

        // Contact
        app.route('/contact')
            // GET endpoint
            .get((req: Request, res: Response) => {
                // Get all contacts
                res.send({
                    status: true,
                    message: 'GET request successfulll!!!!'
                })
            })

            // POST endpoint
            .post((req: Request, res: Response) => {
                // Create new contact
                res.send({
                    status: true,
                    message: 'POST request successfulll!!!!'
                })
            })

        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get((req: Request, res: Response) => {
                // Get a single contact detail
                res.send({
                    status: true,
                    message: 'GET request successfulll!!!!'
                })
            })
            .put((req: Request, res: Response) => {
                // Update a contact
                res.send({
                    status: true,
                    message: 'PUT request successfulll!!!!'
                })
            })
            .delete((req: Request, res: Response) => {
                // Delete a contact
                res.send({
                    status: true,
                    message: 'DELETE request successfulll!!!!'
                })
            })

        // Create a new contact
        app.route('/contact').post(this.contactController.addNewContact);

        // Get all contacts
        app.route('/contact/allContacts').get(this.contactController.getContacts)

        app.route('/contact/:contactId')
            // get a specific contact
            .get(this.contactController.getContactWithID)

            // update a specific contact
            .put(this.contactController.updateContact)

            // delete a specific contact
            .delete(this.contactController.deleteContact)
    }

}


