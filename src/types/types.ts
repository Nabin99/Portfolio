export interface ServiceCardTypes {
  description: string;
  icon: JSX.Element;
  heading: string;
}

export interface ButtonTypes {
  label: string;
  clickHandler: () => void;
}

export interface InputBoxTypes {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  setValue: React.Dispatch<string>;
  validateInput: {
    (value: string): void;
  };
  error: boolean;
  value: string;
  errorMsg: string;
}

export type NavType = {
  title: string;
  toggle: () => void;
};

export interface SectionType {
  ({ children, title }: { children: JSX.Element; title: string }): JSX.Element;
}

export interface SvgIconTypes {
  title: string;
  children: JSX.Element;
  address?: string;
}

export interface TextAreaBoxTypes {
  label: string;
  placeholder: string;
  name: string;
  setValue: React.Dispatch<string>;
  validateInput: {
    (e: string): void;
  };
  error: boolean;
  value: string;
  errorMsg: string;
}

export interface HomeSectionTypes {
  title: string;
  name: string;
  heading: string;
  description: string;
  children: JSX.Element;
  icon: JSX.Element;
  pageLink: string;
}

export interface WorksCardTypes {
  title: string;
  createdAt: string;
  imgSrc?: string;
  description: string;
  urlAddress: string;
  iconSrc?: string;
}

export interface BlogsDetailedTypes {
  title: string;
  heading:string;
  description: string;
  children: JSX.Element;
  adminInfo: JSX.Element;
  recentPosts: JSX.Element;
}
