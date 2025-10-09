interface DropdownItem {
  key: string;
  title: string;
  list: string[];
}

export const items: DropdownItem[] = [
  {
    key: "tech",
    title: "Tech Support",
    list: [
      "Hardware Solutions",
      "Network Solutions",
      "Software Solutions",
      "Community",
      "Access & Security",
    ],
  },
  {
    key: "digital",
    title: "Digital Solutions",
    list: [
      "Web Development",
      "Mobile Apps",
      "Cloud Services",
      "Digital Marketing",
      "SEO Optimization",
    ],
  },
  {
    key: "sales",
    title: "Sales and Supply",
    list: [
      "Computers",
      "Networking Devices",
      "Accessories",
      "Servers",
      "Office Equipment",
    ],
  },
];
