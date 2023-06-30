import axios from "axios";
import {IContact} from "../models/IContact";
import {IGroup} from "../models/IGroup";

export class ContactService {
    private static serverUrl: string = "http://localhost:9000";

    /**
     @usage : to get all contacts
     @method : GET
     @body : no-params
     @url : http://localhost:9000/contacts
     */
    public static getAllContacts(): Promise<{ data: IContact[] }> {
        const dataUrl = `${this.serverUrl}/contacts`;
        return axios.get(dataUrl);
    };

    /**
     @usage : get a contact
     @method : GET
     @body : no-params
     @url : http://localhost:9000/contacts/:contactId
     */
    public static getContact(contactId: string): Promise<{ data: IContact }> {
        const dataUrl = `${this.serverUrl}/contacts/${contactId}`;
        return axios.get(dataUrl);
    };

    /**
     @usage : create a contact
     @method : POST
     @body : name, imageUrl, email, mobile, company, title, groupId
     @url : http://localhost:9000/contacts/
     */
    public static createContact(contact: IContact): Promise<{ data: IContact }> {
        const dataUrl = `${this.serverUrl}/contacts/`;
        return axios.post(dataUrl, contact);
    };

    /**
     @usage : Update a contact
     @method : PUT
     @body : name, imageUrl, email, mobile, company, title, groupId
     @url : http://localhost:9000/contacts/:contactId
     */
    public static updateContact(contact: IContact, contactId: string): Promise<{ data: IContact }> {
        const dataUrl = `${this.serverUrl}/contacts/${contactId}`;
        return axios.put(dataUrl, contact);
    };

    /**
     @usage : Delete a contact
     @method : DELETE
     @body : no-params
     @url : http://localhost:9000/contacts/:contactId
     */
    public static deleteContact(contactId: string): Promise<{ data: {} }> {
        const dataUrl = `${this.serverUrl}/contacts/${contactId}`;
        return axios.delete(dataUrl);
    };

    /**
     @usage : Get all groups
     @method : GET
     @body : no-params
     @url : http://localhost:9000/groups/
     */
    public static getAllGroups(): Promise<{ data: IGroup[] }> {
        const dataUrl = `${this.serverUrl}/groups/`;
        return axios.get(dataUrl);
    };

    /**
     @usage : Get a group
     @method : GET
     @body : no-params
     @url : http://localhost:9000/groups/:groupId
     */
    public static getGroup(groupId: string): Promise<{ data: IGroup }> {
        const dataUrl = `${this.serverUrl}/groups/${groupId}`;
        return axios.get(dataUrl);
    };

}