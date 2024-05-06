export type Patient = {
  id: string;
  name: string;
  caretaker: string;
  email: string;
  phone: number;
  date: Date;
  symptoms: string;
};

export type DraftPatient = Omit<Patient, 'id'>;
