import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: false,
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
   teamMembers = [
  {
    name: 'Yoonus Changoth',
    role: 'CEO & Co-Founder',
    bio: 'Visionary leader with 17+ years in tech entrepreneurship and innovation strategy.',
    photo: 'https://media.licdn.com/dms/image/v2/D5603AQFZk026YV-UMw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718216143718?e=1755129600&v=beta&t=h4m7-WQyJwziKdc5_mLT942h4M0fQ-wwxJwxpDiTdGU'
  },
  {
    name: 'Dr. Lenish Kannan',
    role: 'CTO',
    bio: 'Tech architect and AI enthusiast building the future of enterprise platforms.',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQFQ1N7krEtUsQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719838480485?e=1755129600&v=beta&t=rX6dc4aW2rm4PkYIgvJMCc5nMMTzupaTzWmjrQi_uyM'
  },
  {
    name: 'Abdul Nahas',
    role: 'Head of Design',
    bio: 'Design thinker transforming ideas into human-centered digital experiences.',
    photo: 'https://media.licdn.com/dms/image/v2/D5603AQEbACJqYXq21w/profile-displayphoto-shrink_800_800/B56ZUkTPQpGQAc-/0/1740070781383?e=1755129600&v=beta&t=5bDbAPRvZiM1yFK4-XzPsGJrNoJ2vFmGWb8G20Dzdvs'
  },
  {
    name: 'Anush Sridar',
    role: 'Business Development Manager',
    bio: 'Driving strategic growth and forging key partnerships to scale the business.',
    photo: 'https://media.licdn.com/dms/image/v2/D5603AQEW5OAcGCFdiQ/profile-displayphoto-shrink_800_800/B56ZOV99awHYAc-/0/1733387872070?e=1757548800&v=beta&t=BmPUXsBykJXDTCsQt9CvzcvIqe6icX4QnOjF_d0KA_4' // Replace with real image URL
  },
  {
    name: 'Rohit Roy',
    role: 'Lead HR',
    bio: 'Championing culture, talent, and employee well-being across the organization.',
    photo: 'https://media.licdn.com/dms/image/v2/C5103AQGX7kx06xSVJw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1551011305247?e=1757548800&v=beta&t=MrhtMiy-eqhK8FKHrHg9XrizT_iaDUO-hNmEECmYAW8' // Replace with real image URL
  }
];

}
