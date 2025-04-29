// JavaScript for CyberGuard app interactivity and mock feature implementations

document.addEventListener('DOMContentLoaded', () => {
  // Scam Call Detector
  const scamCallNumberInput = document.getElementById('scamCallNumber');
  const checkScamCallBtn = document.getElementById('checkScamCallBtn');
  const scamCallResult = document.getElementById('scamCallResult');

  checkScamCallBtn.addEventListener('click', () => {
    const number = scamCallNumberInput.value.trim();
    if (!number) {
      scamCallResult.textContent = 'Please enter a phone number.';
      scamCallResult.className = 'text-red-600';
      return;
    }
    // Mock detection logic
    const scamNumbers = ['+1234567890', '1800123456', '9999999999'];
    if (scamNumbers.includes(number)) {
      scamCallResult.textContent = `Warning: The number ${number} is identified as a scam call.`;
      scamCallResult.className = 'text-red-600 font-semibold';
    } else {
      scamCallResult.textContent = `The number ${number} appears safe.`;
      scamCallResult.className = 'text-green-600 font-semibold';
    }
  });

  // Phishing Link Scanner
  const phishingLinkInput = document.getElementById('phishingLinkInput');
  const scanPhishingLinkBtn = document.getElementById('scanPhishingLinkBtn');
  const phishingLinkResult = document.getElementById('phishingLinkResult');

  scanPhishingLinkBtn.addEventListener('click', () => {
    const url = phishingLinkInput.value.trim();
    if (!url) {
      phishingLinkResult.textContent = 'Please enter a URL.';
      phishingLinkResult.className = 'text-red-600';
      return;
    }
    // Mock phishing detection logic
    const phishingDomains = ['phishy.com', 'malicious.net', 'fakebank.org'];
    try {
      const parsedUrl = new URL(url);
      if (phishingDomains.includes(parsedUrl.hostname)) {
        phishingLinkResult.textContent = 'Warning: This link is suspected to be a phishing attempt.';
        phishingLinkResult.className = 'text-red-600 font-semibold';
      } else {
        phishingLinkResult.textContent = 'This link appears safe.';
        phishingLinkResult.className = 'text-green-600 font-semibold';
      }
    } catch {
      phishingLinkResult.textContent = 'Invalid URL format.';
      phishingLinkResult.className = 'text-red-600';
    }
  });

  // Fraud Message Detector
  const fraudMessageInput = document.getElementById('fraudMessageInput');
  const detectFraudMessageBtn = document.getElementById('detectFraudMessageBtn');
  const fraudMessageResult = document.getElementById('fraudMessageResult');

  detectFraudMessageBtn.addEventListener('click', () => {
    const message = fraudMessageInput.value.trim().toLowerCase();
    if (!message) {
      fraudMessageResult.textContent = 'Please enter a message.';
      fraudMessageResult.className = 'text-red-600';
      return;
    }
    // Mock fraud keywords
    const fraudKeywords = ['lottery', 'prize', 'winner', 'urgent', 'bank account', 'password'];
    const foundKeywords = fraudKeywords.filter(keyword => message.includes(keyword));
    if (foundKeywords.length > 0) {
      fraudMessageResult.textContent = 'Warning: This message contains suspicious content.';
      fraudMessageResult.className = 'text-red-600 font-semibold';
    } else {
      fraudMessageResult.textContent = 'This message appears safe.';
      fraudMessageResult.className = 'text-green-600 font-semibold';
    }
  });

  // Fake Profile Checker
  const fakeProfileInput = document.getElementById('fakeProfileInput');
  const checkFakeProfileBtn = document.getElementById('checkFakeProfileBtn');
  const fakeProfileResult = document.getElementById('fakeProfileResult');

  checkFakeProfileBtn.addEventListener('click', () => {
    const profile = fakeProfileInput.value.trim().toLowerCase();
    if (!profile) {
      fakeProfileResult.textContent = 'Please enter a username or profile ID.';
      fakeProfileResult.className = 'text-red-600';
      return;
    }
    // Mock fake profiles
    const fakeProfiles = ['scammer123', 'fakeuser', 'bot_account'];
    if (fakeProfiles.includes(profile)) {
      fakeProfileResult.textContent = 'Warning: This profile is likely fake.';
      fakeProfileResult.className = 'text-red-600 font-semibold';
    } else {
      fakeProfileResult.textContent = 'This profile appears genuine.';
      fakeProfileResult.className = 'text-green-600 font-semibold';
    }
  });

  // Deepfake Detector (placeholder)
  const deepfakeVideoInput = document.getElementById('deepfakeVideoInput');
  const detectDeepfakeBtn = document.getElementById('detectDeepfakeBtn');
  const deepfakeResult = document.getElementById('deepfakeResult');

  detectDeepfakeBtn.addEventListener('click', () => {
    if (!deepfakeVideoInput.files.length) {
      deepfakeResult.textContent = 'Please upload a video file.';
      deepfakeResult.className = 'text-red-600';
      return;
    }
    // Placeholder response
    deepfakeResult.textContent = 'Deepfake detection is a complex feature and is currently under development.';
    deepfakeResult.className = 'text-yellow-600 font-semibold';
  });

  // Daily Cyber Safety Tips
  const cyberSafetyTips = [
    'Never share your passwords with anyone.',
    'Be cautious of unsolicited calls and messages.',
    'Verify links before clicking on them.',
    'Keep your software and apps updated.',
    'Use two-factor authentication whenever possible.',
    'Avoid sharing personal information on social media.',
    'Report suspicious activity to authorities or platforms.',
  ];
  const cyberSafetyTipsList = document.getElementById('cyberSafetyTips');
  cyberSafetyTips.forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip;
    cyberSafetyTipsList.appendChild(li);
  });

  // Location Scam Alerts
  const enableLocationBtn = document.getElementById('enableLocationBtn');
  const locationAlertResult = document.getElementById('locationAlertResult');

  enableLocationBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
      locationAlertResult.textContent = 'Geolocation is not supported by your browser.';
      locationAlertResult.className = 'text-red-600';
      return;
    }
    locationAlertResult.textContent = 'Requesting location permission...';
    locationAlertResult.className = 'text-gray-700';

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Mock location-based scam alert
        locationAlertResult.textContent = `Location enabled. You are at (${latitude.toFixed(2)}, ${longitude.toFixed(2)}). No scam alerts in your area.`;
        locationAlertResult.className = 'text-green-600 font-semibold';
      },
      (error) => {
        locationAlertResult.textContent = `Error getting location: ${error.message}`;
        locationAlertResult.className = 'text-red-600';
      }
    );
  });

  // User Reporting
  const userReportForm = document.getElementById('userReportForm');
  const userReportResult = document.getElementById('userReportResult');

  userReportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const reportType = document.getElementById('reportType').value;
    const reportDetails = document.getElementById('reportDetails').value.trim();

    if (!reportType) {
      userReportResult.textContent = 'Please select a report type.';
      userReportResult.className = 'text-red-600';
      return;
    }
    if (!reportDetails) {
      userReportResult.textContent = 'Please provide details about the issue.';
      userReportResult.className = 'text-red-600';
      return;
    }

    // Mock submission
    userReportResult.textContent = 'Thank you for your report. Our team will review it shortly.';
    userReportResult.className = 'text-green-600 font-semibold';

    // Reset form
    userReportForm.reset();
  });
});
