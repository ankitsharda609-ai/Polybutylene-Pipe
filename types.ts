
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}
