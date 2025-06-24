export const contactFormTemplate = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle demande de contact - Esprit Conseil SARL</title>
    <style type="text/css">
        /* Client-specific styles */
        #outlook a { padding: 0; }
        body { width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0; }
        .ExternalClass { width: 100%; }
        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; }

        /* General styles */
        body, table, td, div, p, a, span {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333333;
        }

        .email-container {
            max-width: 650px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            border-radius: 12px;
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #46589a 0%, #5a6bb8 100%);
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }

        .header .logo {
            width: 250px;
            height: 80px;
            margin: 0 auto;
            background-image: url('https://i.postimg.cc/QCVrsfFF/20250609-0101-White-Logo-Design-remix-01jx8ztbw6e6g8ksss3yxja5mb.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
        }

        .status-badge {
            background-color: rgba(255, 255, 255, 0.2);
            color: #ffffff;
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-top: 15px;
            display: inline-block;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .content {
            padding: 40px 30px;
            background-color: #ffffff;
        }

        .content h2 {
            color: #2c3e50;
            font-size: 32px;
            margin-top: 0;
            margin-bottom: 30px;
            text-align: center;
            font-weight: 700;
        }

        .request-summary {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 30px;
            border-left: 5px solid #46589a;
        }

        .request-header {
            text-align: center;
            margin-bottom: 20px;
        }

        .request-date {
            font-size: 16px;
            color: #6c757d;
            font-weight: 500;
        }

        .client-info {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 25px;
            border: 1px solid #e9ecef;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .section-title {
            color: #46589a;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .section-title::before {
            content: '';
            width: 4px;
            height: 20px;
            background-color: #46589a;
            margin-right: 10px;
            border-radius: 2px;
        }

        .field-row {
            display: flex;
            margin-bottom: 15px;
            align-items: flex-start;
            padding: 12px 0;
            border-bottom: 1px solid #f1f3f4;
        }

        .field-row:last-child {
            border-bottom: none;
        }

        .field-label {
            color: #495057;
            font-weight: 600;
            min-width: 120px;
            margin-right: 20px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .field-value {
            color: #333333;
            font-weight: 500;
            flex: 1;
            word-break: break-word;
            font-size: 16px;
        }

        .message-section {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 25px;
            border: 1px solid #e9ecef;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .message-content {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #46589a;
            font-style: italic;
            line-height: 1.7;
            white-space: pre-wrap;
            font-size: 16px;
            color: #2c3e50;
        }

        .privacy-notice {
            background-color: #d1ecf1;
            border: 1px solid #bee5eb;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
            text-align: center;
        }

        .privacy-notice .icon {
            color: #0c5460;
            font-size: 18px;
            margin-right: 8px;
        }

        .privacy-notice p {
            margin: 0;
            color: #0c5460;
            font-weight: 500;
        }

        .action-section {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 30px;
            margin-top: 30px;
            text-align: center;
            border-radius: 12px;
        }

        .footer {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            color: #ffffff;
            padding: 30px;
            text-align: center;
            font-size: 14px;
        }

        .footer .logo {
            width: 120px;
            height: 40px;
            margin: 15px auto 0 auto;
            background-image: url('https://i.postimg.cc/QCVrsfFF/20250609-0101-White-Logo-Design-remix-01jx8ztbw6e6g8ksss3yxja5mb.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
        }

        /* Responsive Design */
        @media screen and (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 8px;
            }
            
            .content, .header, .footer, .action-section {
                padding: 25px 20px;
            }
            
            .field-row {
                flex-direction: column;
                padding: 15px 0;
            }
            
            .field-label {
                min-width: auto;
                margin-bottom: 8px;
                margin-right: 0;
            }

            .header .logo {
                width: 200px;
                height: 65px;
            }

            .footer .logo {
                width: 100px;
                height: 35px;
            }

            .content h2 {
                font-size: 26px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">&nbsp;</div>
            <div class="status-badge">Nouveau Message</div>
        </div>

        <div class="content">
            <h2>Nouveau message de contact !</h2>

            <!-- Request Summary -->
            <div class="request-summary">
                <div class="request-header">
                    <div class="request-date">Reçue le {{date}}</div>
                </div>
            </div>

            <!-- Client Information -->
            <div class="client-info">
                <div class="section-title">Informations du Demandeur</div>
                
                <div class="field-row">
                    <span class="field-label">Nom complet</span>
                    <span class="field-value">{{name}}</span>
                </div>
                
                <div class="field-row">
                    <span class="field-label">Email</span>
                    <span class="field-value">{{email}}</span>
                </div>
                
                <div class="field-row">
                    <span class="field-label">Téléphone</span>
                    <span class="field-value">{{phone}}</span>
                </div>
                
                <div class="field-row">
                    <span class="field-label">Sujet</span>
                    <span class="field-value">{{subject}}</span>
                </div>
            </div>

            <!-- Message Section -->
            <div class="message-section">
                <div class="section-title">Message du Client</div>
                <div class="message-content">{{message}}</div>
            </div>

            <!-- Privacy Notice -->
            <div class="privacy-notice">
                <p>
                    <span class="icon">✓</span>
                    Le client a accepté les conditions de confidentialité
                </p>
            </div>

            <!-- Action Buttons -->
            <div class="action-section">
                <p style="margin-bottom: 25px; font-size: 16px; color: #495057;">
                    Merci de traiter cette demande dans les plus brefs délais.
                </p>
            </div>
        </div>

        <div class="footer">
            <div class="logo">&nbsp;</div>
        </div>
    </div>
</body>
</html>
`;

export const devisFormTemplate = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle demande de formation - Esprit Conseil SARL</title>
    <style type="text/css">
        /* Client-specific styles */
        #outlook a { padding: 0; }
        body { width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0; }
        .ExternalClass { width: 100%; }
        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; }

        /* General styles */
        body, table, td, div, p, a, span {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333333;
        }

        .email-container {
            max-width: 650px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            border-radius: 12px;
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #46589a 0%, #5a6bb8 100%);
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }

        .header .logo {
            width: 250px;
            height: 80px;
            margin: 0 auto;
            background-image: url('https://i.postimg.cc/QCVrsfFF/20250609-0101-White-Logo-Design-remix-01jx8ztbw6e6g8ksss3yxja5mb.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
        }

        .status-badge {
            background-color: rgba(255, 255, 255, 0.2);
            color: #ffffff;
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-top: 15px;
            display: inline-block;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .content {
            padding: 40px 30px;
            background-color: #ffffff;
        }

        .content h2 {
            color: #2c3e50;
            font-size: 32px;
            margin-top: 0;
            margin-bottom: 30px;
            text-align: center;
            font-weight: 700;
        }

        .request-summary {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 30px;
            border-left: 5px solid #46589a;
        }

        .request-header {
            text-align: center;
            margin-bottom: 20px;
        }

        .formation-badge {
            background: linear-gradient(135deg, #46589a 0%, #5a6bb8 100%);
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 700;
            display: inline-block;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .formation-name {
            font-size: 20px;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 10px;
        }

        .request-date {
            font-size: 16px;
            color: #6c757d;
            font-weight: 500;
        }

        .client-info, .formation-details {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 25px;
            border: 1px solid #e9ecef;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .section-title {
            color: #46589a;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .section-title::before {
            content: '';
            width: 4px;
            height: 20px;
            background-color: #46589a;
            margin-right: 10px;
            border-radius: 2px;
        }

        .field-row {
            display: flex;
            margin-bottom: 15px;
            align-items: flex-start;
            padding: 12px 0;
            border-bottom: 1px solid #f1f3f4;
        }

        .field-row:last-child {
            border-bottom: none;
        }

        .field-label {
            color: #495057;
            font-weight: 600;
            min-width: 140px;
            margin-right: 20px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .field-value {
            color: #333333;
            font-weight: 500;
            flex: 1;
            word-break: break-word;
            font-size: 16px;
        }

        .highlight-value {
            background-color: #fff3cd;
            padding: 8px 12px;
            border-radius: 6px;
            border-left: 3px solid #ffc107;
            font-weight: 600;
            color: #856404;
        }

        .formation-specs {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }

        .spec-item {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 3px solid #46589a;
            text-align: center;
        }

        .spec-label {
            font-size: 12px;
            color: #6c757d;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }

        .spec-value {
            font-size: 18px;
            color: #2c3e50;
            font-weight: 700;
        }

        .comments-section {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 25px;
            border: 1px solid #e9ecef;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .comments-content {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #46589a;
            font-style: italic;
            line-height: 1.7;
            white-space: pre-wrap;
            font-size: 16px;
            color: #2c3e50;
            min-height: 60px;
        }

        .privacy-notice {
            background-color: #d1ecf1;
            border: 1px solid #bee5eb;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
            text-align: center;
        }

        .privacy-notice .icon {
            color: #0c5460;
            font-size: 18px;
            margin-right: 8px;
        }

        .privacy-notice p {
            margin: 0;
            color: #0c5460;
            font-weight: 500;
        }

        .action-section {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 30px;
            margin-top: 30px;
            text-align: center;
            border-radius: 12px;
        }

        .action-button {
            display: inline-block;
            padding: 15px 40px;
            background: linear-gradient(135deg, #46589a 0%, #5a6bb8 100%);
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin: 10px;
            transition: all 0.3s ease;
        }

        .action-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(70, 88, 154, 0.3);
        }

        .action-button.secondary {
            background: transparent;
            border: 2px solid #46589a;
            color: #46589a !important;
        }

        .footer {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            color: #ffffff;
            padding: 30px;
            text-align: center;
            font-size: 14px;
        }

        .footer .logo {
            width: 120px;
            height: 40px;
            margin: 15px auto 0 auto;
            background-image: url('https://i.postimg.cc/QCVrsfFF/20250609-0101-White-Logo-Design-remix-01jx8ztbw6e6g8ksss3yxja5mb.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
        }

        .footer-text {
            margin: 15px 0;
            opacity: 0.9;
        }

        /* Responsive Design */
        @media screen and (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 8px;
            }
            
            .content, .header, .footer, .action-section {
                padding: 25px 20px;
            }
            
            .field-row {
                flex-direction: column;
                padding: 15px 0;
            }
            
            .field-label {
                min-width: auto;
                margin-bottom: 8px;
                margin-right: 0;
            }

            .formation-specs {
                grid-template-columns: 1fr;
            }

            .header .logo {
                width: 200px;
                height: 65px;
            }

            .footer .logo {
                width: 100px;
                height: 35px;
            }

            .content h2 {
                font-size: 26px;
            }

            .formation-badge {
                font-size: 14px;
                padding: 10px 20px;
            }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
            .client-info, .formation-details, .comments-section {
                background-color: #f8f9fa;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">&nbsp;</div>
            <div class="status-badge">Demande de devis</div>
        </div>

        <div class="content">
            <h2>Nouvelle demande de devis pour une formation</h2>

            <!-- Request Summary -->
            <div class="request-summary">
                <div class="request-header">
                    <div class="formation-badge">{{formationId}}</div>
                    <div class="formation-name">{{formationName}}</div>
                    <div class="request-date">Demande reçue le {{date}}</div>
                </div>
            </div>

            <!-- Client Information -->
            <div class="client-info">
                <div class="section-title">Informations du Demandeur</div>
                
                <div class="field-row">
                    <span class="field-label">Nom complet</span>
                    <span class="field-value">{{fullName}}</span>
                </div>
                
                <div class="field-row">
                    <span class="field-label">Fonction</span>
                    <span class="field-value">{{function}}</span>
                </div>
                
                <div class="field-row">
                    <span class="field-label">Organisation</span>
                    <span class="field-value">{{organization}}</span>
                </div>
                
                <div class="field-row">
                    <span class="field-label">Téléphone fixe</span>
                    <span class="field-value">{{phone}}</span>
                </div>
                
                <div class="field-row">
                    <span class="field-label">Mobile</span>
                    <span class="field-value">{{mobile}}</span>
                </div>
                
                <div class="field-row">
                    <span class="field-label">Sujet</span>
                    <span class="field-value">{{subject}}</span>
                </div>
            </div>

            <!-- Formation Details -->
            <div class="formation-details">
                <div class="section-title">Détails de la Formation</div>
                
                <div class="formation-specs">
                    <div class="spec-item">
                        <div class="spec-label">Nombre Participants</div>
                        <div class="spec-value">{{participants}}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Date Souhaitée</div>
                        <div class="spec-value">{{trainingDate}}</div>
                    </div>
                </div>

                <div class="field-row">
                    <span class="field-label">Formation</span>
                    <span class="field-value highlight-value">{{formationName}} ({{formationId}})</span>
                </div>
            </div>

            <!-- Comments Section -->
            <div class="comments-section">
                <div class="section-title">Commentaires & Besoins Spécifiques</div>
                <div class="comments-content">{{comments}}</div>
            </div>

            <!-- Privacy Notice -->
            <div class="privacy-notice">
                <p>
                    <span class="icon">✓</span>
                    Le client a accepté les conditions de confidentialité
                </p>
            </div>

            <!-- Action Buttons -->
            <div class="action-section">
                <p style="margin-bottom: 25px; font-size: 16px; color: #495057;">
                    <strong>{{participants}} participants</strong> demandés pour la formation <strong>{{formationName}}</strong><br>
                    Merci de traiter cette demande dans les plus brefs délais.
                </p>
            </div>
        </div>

        <div class="footer">
            <div class="logo">&nbsp;</div>
        </div>
    </div>
</body>
</html>
`;
