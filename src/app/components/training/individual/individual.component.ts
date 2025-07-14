import { Component } from '@angular/core';

@Component({
  selector: 'app-individual',
  standalone: false,
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent {
  studentBenefits = [
    'Globally recognized SAP certification',
    'Career-focused business content',
    'Improved placement ratio',
    'On-campus SAP course availability',
    'Flexible, personalized learning',
    'Hands-on simulations linked to SAP servers in Germany',
    'Up-to-date material from SAP',
    'Support via NetMeetings, Voice & Web Chat',
    'Certification issued directly by SAP'
  ];

  universityBenefits = [
    'Brand collaboration with SAP',
    'SAP portal listing',
    'Improved campus recruitment prospects',
    'Use of SAP logo in marketing',
    'Placement support from SAP'
  ];

  academyVision = [
    'Develop SAP-skilled workforce to support the ecosystem',
    'Contribute to corporate social responsibility',
    'Provide ERP-aligned curriculum to students',
    'Boost career potential via SAP certification'
  ];

  primusSupport = [
    'Setup labs & infrastructure at colleges',
    'Configure LMS, simulations, assessments',
    '96-hour Train The Trainer (T3) program',
    'Support for training, labs & assignments',
    'Conduct CAT assessments (L0 to L1)',
    '100% placement assistance for SAP-certified students'
  ];

  universities = [
    { name: 'College of Engineering, Pune', url: 'https://pgderp.coep.org.in/pgderp/' },
    { name: 'JK Lakshmipat University, Jaipur', url: 'http://www.jklu.edu.in/about-us/academic-collaborations' },
    { name: 'Accountants Service Society (ASS Kerala)', url: 'http://asskerala.com/' },
    { name: 'Sanjivani College of Engineering', url: 'http://www.sanjivanicoe.org.in/' },
    { name: 'Dr. Babasaheb Ambedkar Marathwada University Colleges, Aurangabad', url: '' },
    { name: 'PES College of Engineering, Aurangabad', url: '' },
    { name: 'Deogiri Institute of Engineering & Management, Aurangabad', url: '' },
    { name: 'CSMSS Engineering College, Aurangabad', url: '' },
    { name: 'Shreeyash College Of Engineering, Aurangabad', url: '' },
    { name: 'Nutan Maharashtra Institute, Talegaon', url: '' },
    { name: 'ASM Group of Institutes, Pune', url: 'http://www.asmibmr.edu.in/programs/pgdm-in-enterprise-management-integrated-sap' },
    { name: 'Manav Rachna Vidyanatariksha Pvt. Ltd, Faridabad', url: '' },
    { name: 'Edupristine', url: '' },
    { name: 'ICA Edu Skills Pvt Ltd', url: '' },
    { name: 'Victoria University, Australia', url: 'https://www.vu.edu.au/victoria-university-india' },
    { name: 'Education Center of Australia', url: 'https://www.eca.edu.au/' },
    { name: 'NextGen Education Foundation', url: 'http://nextgenedu.in' }
  ];

  
}
