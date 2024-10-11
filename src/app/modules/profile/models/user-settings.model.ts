export interface UserSettings {
    fullName: string;
    companyName: string | null;
    phoneNumber: string;
    country: string | null;
    city: string | null;
    address: string | null;
    zipCode: string | null;
    tinNumber: string | null;
    userEmail: string;
    dateOfBirth: string | null;
    receivePromotionalEmails: boolean;
}