import { FleetVehicle } from '@/types';

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'patrol-formation-9',
    title: 'Security Patrol Fleet Formation',
    model: 'Mahindra Bolero Fleet Units',
    category: 'formation',
    description:
      'A formation display of Mahindra Bolero patrol and utility vehicles utilized in S.S. Agency’s field coordination and security operations in Sambalpur, Odisha.',
    image: '/images/fleet/fleet-formation-patrol.jpg',
    thumbnail: '/images/fleet/fleet-formation-patrol.jpg',
    details: {
      role: 'Field Deployment & Operational Presence',
      area: 'Sambalpur & Surrounding Districts',
      features: [
        'Fitted with protective windshield security grilles',
        'Commercial taxi/transport registration (Yellow Plates)',
        'High ground clearance for rough terrain and industrial access',
        'Coordinated deployment for site inspection and supervisory visits',
      ],
    },
  },
  {
    id: 'atm-cash-van-unit',
    title: 'ATM Cash-in-Transit (CIT) Security Van',
    plateNumber: 'OD 15 A 6789',
    model: 'Mahindra Bolero CIT Security Van',
    category: 'patrol',
    description:
      'Secured Mahindra Bolero Cash-in-Transit (CIT) vehicle equipped with protective wire mesh, separate vault compartment, and armed escort team for bank ATM cash logistics in Sambalpur.',
    image: '/images/services/atm-cash-van.jpg',
    thumbnail: '/images/services/atm-cash-van.jpg',
    details: {
      role: 'ATM Cash Replenishment & Bank Currency Transit',
      area: 'Sambalpur & Western Odisha Banking Network',
      features: [
        'Reinforced protective steel window mesh grills',
        'Dual-custody internal cash vault compartments',
        'Dedicated armed security guard escort crew',
        'Real-time GPS tracking and live control room telemetry',
      ],
    },
  },
  {
    id: 'patrol-trio-unit',
    title: 'Field Response & Patrol Trio',
    plateNumber: 'OD 15 AA 0698 / OD 15 X 5308 / OD 23 R 6102',
    model: 'Mahindra Bolero Utility Lineup',
    category: 'field-unit',
    description:
      'Three Mahindra Bolero operational vehicles stationed together during regular field coordination and logistical assignment in Sambalpur.',
    image: '/images/fleet/fleet-trio-patrol.jpg',
    thumbnail: '/images/fleet/fleet-trio-patrol.jpg',
    details: {
      role: 'Site Supervision & Patrol Deployment',
      area: 'Saraswati Vihar, Ainthapali & Sambalpur Region',
      features: [
        'Commercial carrier registrations: OD 15 AA 0698, OD 15 X 5308, OD 23 R 6102',
        'Sturdy steel-frame protective front mesh',
        'Dedicated seating for supervisory security teams',
        'Daily route mobility across client facilities',
      ],
    },
  },
  {
    id: 'patrol-bolero-6102',
    title: 'Field Unit: OD 23 R 6102',
    plateNumber: 'OD 23 R 6102',
    model: 'Mahindra Bolero',
    category: 'patrol',
    description:
      'Operational field vehicle OD 23 R 6102 used for site supervisor rounds, guard post inspections, and management client visits.',
    image: '/images/fleet/vehicle-patrol-6102.jpg',
    thumbnail: '/images/fleet/vehicle-patrol-6102.jpg',
    details: {
      role: 'Supervisory Patrol & Transit',
      area: 'Sambalpur Local Operations',
      features: [
        'Registration: OD 23 R 6102',
        'Protective cabin grillwork',
        'Assigned for guard relief and supervisory rounds',
        'Maintained for dependable all-weather transit',
      ],
    },
  },
  {
    id: 'patrol-bolero-5308',
    title: 'Field Unit: OD 15 X 5308',
    plateNumber: 'OD 15 X 5308',
    model: 'Mahindra Bolero',
    category: 'patrol',
    description:
      'Field inspection vehicle OD 15 X 5308 photographed during routine duty operations in Saraswati Vihar, Sambalpur.',
    image: '/images/fleet/vehicle-patrol-5308.jpg',
    thumbnail: '/images/fleet/vehicle-patrol-5308.jpg',
    details: {
      role: 'Operations & Field Coordination',
      area: 'Sambalpur & Western Odisha',
      features: [
        'Registration: OD 15 X 5308',
        'Front windshield guard cage',
        'Assigned to field officers for site check-ins',
        'High reliability for facility access roads',
      ],
    },
  },
  {
    id: 'official-team-lineup',
    title: 'Agency Operations Lineup & Team',
    model: 'Full Fleet & Personnel Lineup',
    category: 'lineup',
    description:
      'Official line-up featuring uniformed field security personnel alongside the agency’s Mahindra Bolero vehicles, representing the active operational spirit of S.S. Agency.',
    image: '/images/about/company-team-lineup.jpg',
    thumbnail: '/images/about/company-team-lineup.jpg',
    details: {
      role: 'Full Agency Operational Readiness',
      area: 'Headquartered in Sambalpur, Odisha',
      features: [
        'Uniformed security guards and supervisory staff',
        'Multiple Mahindra Bolero units arranged in duty formation',
        'Clear identification and company accountability',
        'Official branding: "Your Safety, Our Priority"',
      ],
    },
  },
];
