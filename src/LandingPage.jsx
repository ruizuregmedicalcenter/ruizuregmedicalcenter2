import React, { useState } from 'react';

const USFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 741 390" className="w-4 h-3 rounded-[1px] object-cover shadow-sm">
        <rect width="741" height="390" fill="#bd3d44" />
        <path d="M0 30h741M0 90h741M0 150h741M0 210h741M0 270h741M0 330h741" stroke="#fff" strokeWidth="30" />
        <rect width="296" height="210" fill="#192f5d" />
        <path d="M25 20l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" fill="#fff" />
    </svg>
);

const ESFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className="w-4 h-3 rounded-[1px] object-cover shadow-sm">
        <rect width="750" height="500" fill="#c60b1e" />
        <rect width="750" height="250" y="125" fill="#ffc400" />
    </svg>
);

const LandingPage = () => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-50 min-h-screen flex flex-col font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/90 backdrop-blur-md border-b border-solid border-slate-100 dark:border-slate-800">
                <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo.png"
                            alt="Ruiz Unger Logo"
                            className="h-12 w-auto object-contain"
                        />
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                            Ruiz Unger <span className="font-light text-slate-500 underline-offset-4">Medical Center</span>
                        </span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">{language === 'en' ? 'Home' : 'Inicio'}</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">{language === 'en' ? 'Services' : 'Servicios'}</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#location">{language === 'en' ? 'Contact' : 'Contacto'}</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block text-right mr-4">
                            <p className="text-[10px] text-secondary font-extrabold uppercase tracking-widest">{language === 'en' ? 'Bilingual Care' : 'Atención Bilingüe'}</p>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">(786) 536-7728</p>
                        </div>
                        <div className="lang-switch mr-2 flex bg-slate-100 dark:bg-slate-800 rounded-full p-1 border border-slate-200 dark:border-slate-700">
                            <button
                                onClick={() => toggleLanguage('en')}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${language === 'en'
                                    ? 'bg-white shadow-sm text-slate-900 border border-slate-100'
                                    : 'text-slate-500 hover:text-slate-900'
                                    }`}
                            >
                                <USFlag />
                                <span>EN</span>
                            </button>
                            <button
                                onClick={() => toggleLanguage('es')}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${language === 'es'
                                    ? 'bg-white shadow-sm text-slate-900 border border-slate-100'
                                    : 'text-slate-500 hover:text-slate-900'
                                    }`}
                            >
                                <ESFlag />
                                <span>ES</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="max-w-[1200px] mx-auto px-6 py-10">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 min-h-[520px] flex items-center">
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/40 to-transparent z-10"></div>
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: 'url("/hero-image.png")' }}
                            ></div>
                        </div>
                        <div className="relative z-20 px-10 md:px-16 max-w-2xl">
                            <span className="inline-block bg-secondary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                                {language === 'en' ? 'Your Miami Health Hub' : 'Su Centro de Salud en Miami'}
                            </span>
                            <h2 className="text-white text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6">
                                {language === 'en' ? 'Medical Center ' : 'Centro Médico '}
                                <span className="text-primary">{language === 'en' ? 'redefined.' : 'redefinido.'}</span>
                            </h2>
                            <p className="text-slate-200 text-lg mb-8 leading-relaxed font-light">
                                {language === 'en'
                                    ? 'Experience healthcare that truly prioritizes your well-being. We specialize in USCIS-certified immigration medical exams (I-693), comprehensive post-accident rehabilitation, and advanced IV vitamin therapies. Located centrally in Miami, our dedicated bilingual team provides professional, efficient, and compassionate care to ensure your health and legal documentation needs are met with excellence.'
                                    : 'Experimente una atención médica que realmente prioriza su bienestar. Nos especializamos en exámenes médicos de inmigración certificados por USCIS (I-693), rehabilitación integral post-accidente y terapias avanzadas de vitaminas IV. Ubicados céntricamente en Miami, nuestro dedicado equipo bilingüe brinda una atención profesional, eficiente y compasiva para asegurar que sus necesidades de salud y documentación legal se cumplan con excelencia.'}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="tel:+17865367728" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg flex items-center gap-2">
                                    <span className="material-symbols-outlined">call</span>
                                    {language === 'en' ? 'Call Us' : 'Llámenos'}
                                </a>
                                <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all">
                                    {language === 'en' ? 'Explore Care' : 'Explorar Cuidado'}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pillars Section */}
                <section id="services" className="max-w-[1200px] mx-auto px-6 py-12">
                    <div className="w-full mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        {/* Unified Services Header */}
                        <div className="p-8 text-center bg-white">
                            <h3 className="text-2xl font-bold text-slate-800">{language === 'en' ? 'Our Comprehensive Services' : 'Nuestros Servicios Integrales'}</h3>
                            <p className="text-slate-500 text-sm mt-2 max-w-2xl mx-auto">
                                {language === 'en'
                                    ? "Explore our full range of medical solutions, from official immigration exams and accident recovery to holistic wellness therapies."
                                    : "Explore nuestra gama completa de soluciones médicas, desde exámenes oficiales de inmigración y recuperación de accidentes hasta terapias de bienestar holístico."}
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 p-6 pt-0 bg-white">
                            {/* Section 1: Accident Recovery */}
                            <div id="accident" className="bg-white rounded-2xl px-6 pb-6 pt-5 shadow-sm hover:shadow-md border border-slate-100 transition-all flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="size-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-3xl font-normal">personal_injury</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-tight">{language === 'en' ? 'Accident Recovery' : 'Recuperación de Accidentes'}</h3>
                                        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-1">{language === 'en' ? 'Traffic & Personal Injury' : 'Tráfico y Lesiones Personales'}</p>
                                    </div>
                                </div>
                                <p className="text-slate-500 mb-3 text-sm leading-relaxed">
                                    {language === 'en'
                                        ? "Experts in the assessment and rehabilitation of traffic accident injuries. Comprehensive approach from diagnosis to physical therapy."
                                        : "Expertos en la valoración y rehabilitación de lesiones por accidentes de tráfico. Enfoque integral desde el diagnóstico hasta la terapia física."}
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-rose-600 mt-1 font-normal">folder_managed</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Case Coordination' : 'Coordinación de Casos'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Legal representative support' : 'Apoyo a representante legal'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-rose-600 mt-1 font-normal">description</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Clinical Documentation' : 'Documentación Clínica'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Precise reporting' : 'Informes precisos'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-rose-600 mt-1 font-normal">stethoscope</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Comprehensive Exams' : 'Exámenes Integrales'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Dynamic evaluations' : 'Evaluaciones dinámicas'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-rose-600 mt-1 font-normal">radiology</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Diagnostic Imaging' : 'Diagnóstico por Imágenes'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'On-site X-rays' : 'Rayos X en el sitio'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-rose-600 mt-1 font-normal">physical_therapy</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Physical Therapy' : 'Terapia Física'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Recovery from injuries' : 'Recuperación de lesiones'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Immigration Process */}
                            <div id="immigration" className="bg-white rounded-2xl px-6 pb-6 pt-5 shadow-sm hover:shadow-md border border-slate-100 transition-all flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="size-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-3xl font-normal">badge</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-tight">{language === 'en' ? 'Immigration Process' : 'Proceso de Inmigración'}</h3>
                                        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-1">{language === 'en' ? 'USCIS Certified Civil Surgeons' : 'Cirujanos Civiles Certificados'}</p>
                                    </div>
                                </div>
                                <p className="text-slate-500 mb-3 text-sm leading-relaxed">
                                    {language === 'en'
                                        ? "Certified medical evaluations for immigration procedures. Efficient, transparent, and error-free process for your interview."
                                        : "Evaluaciones médicas certificadas para trámites migratorios. Proceso eficiente, transparente y libre de errores para su entrevista."}
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-slate-600 mt-1 font-normal">clinical_notes</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'I-693 Medical Exam' : 'Examen Médico I-693'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Complete physical & mental assessment' : 'Evaluación física y mental completa'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-slate-600 mt-1 font-normal">biotech</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Laboratory' : 'Laboratorio'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Quantiferon and RPR / GC Screening (Syphilis / Gonorrhea)' : 'Quantiferon y RPR / GC Screening (Sífilis / Gonorrea)'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-slate-600 mt-1 font-normal">vaccines</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Vaccination' : 'Vacunación'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Records validation & on-site shots' : 'Validación de registros y vacunas en el sitio'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-slate-600 mt-1 font-normal">radiology</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Chest X-Ray Support' : 'Soporte de Rayos X'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Coordination if indicated' : 'Coordinación si es indicado'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-slate-600 mt-1 font-normal">edit_document</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Form Preparation' : 'Preparación de Formas'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Sealed envelope ready for interview' : 'Sobre sellado listo para la entrevista'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-slate-600 mt-1 font-normal">rocket_launch</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Expedited Service' : 'Servicio Expedito'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Rush options available' : 'Opciones urgentes disponibles'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Medical Consultation */}
                            <div id="consultation" className="bg-white rounded-2xl px-6 pb-6 pt-5 shadow-sm hover:shadow-md border border-slate-100 transition-all flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="size-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-3xl font-normal">stethoscope</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-tight">{language === 'en' ? 'Medical Consultation' : 'Consulta Médica'}</h3>
                                        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-1">{language === 'en' ? 'Primary Care & Prevention' : 'Atención Primaria y Prevención'}</p>
                                    </div>
                                </div>
                                <p className="text-slate-500 mb-3 text-sm leading-relaxed">
                                    {language === 'en'
                                        ? "Services for patients without insurance or self-pay. Comprehensive care focused on your long-term well-being."
                                        : "Servicios para pacientes sin seguro o pago privado. Atención integral enfocada en su bienestar a largo plazo."}
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-indigo-600 mt-1 font-normal">clinical_notes</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Comprehensive Evaluation' : 'Evaluación Integral'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Full physical assessment' : 'Evaluación física completa'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-indigo-600 mt-1 font-normal">biotech</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Lab Analysis' : 'Análisis de Laboratorio'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Detailed blood work review' : 'Revisión detallada de sangre'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-indigo-600 mt-1 font-normal">assignment_turned_in</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Treatment Planning' : 'Plan de Tratamiento'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Tailored to your needs' : 'Adaptado a usted'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-indigo-600 mt-1 font-normal">health_and_safety</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Preventive Care' : 'Cuidado Preventivo'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Proactive health strategies' : 'Estrategias de salud'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-indigo-600 mt-1 font-normal">spa</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Wellness Focus' : 'Enfoque en Bienestar'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Holistic approach' : 'Enfoque holístico'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Weight Loss Program */}
                            <div id="weight-loss" className="bg-white rounded-2xl px-6 pb-6 pt-5 shadow-sm hover:shadow-md border border-slate-100 transition-all flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-3xl font-normal">monitor_weight</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-tight">{language === 'en' ? 'Weight Loss Program' : 'Control de Peso'}</h3>
                                        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-1">{language === 'en' ? 'Supervised & Personalized' : 'Supervisado y Personalizado'}</p>
                                    </div>
                                </div>
                                <p className="text-slate-500 mb-3 text-sm leading-relaxed">
                                    {language === 'en'
                                        ? "Personalized, medically supervised program designed to help you achieve your healthy weight goals safely."
                                        : "Programa personalizado con supervisión médica para ayudarle a alcanzar sus metas de peso saludable de manera segura."}
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-emerald-600 mt-1 font-normal">medication</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'GLP-1 Therapy' : 'Terapia GLP-1'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Prescription support (if indicated)' : 'Apoyo con receta'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-emerald-600 mt-1 font-normal">body_system</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'InBody Analysis' : 'Análisis InBody'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Advanced body composition' : 'Composición corporal'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-emerald-600 mt-1 font-normal">vital_signs</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Lipotropic Agents' : 'Lipotrópicos'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Metabolic support injections' : 'Inyecciones metabólicas'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-emerald-600 mt-1 font-normal">clinical_notes</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Medical Evaluation' : 'Evaluación'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Initial health assessment' : 'Valoración inicial'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-emerald-600 mt-1 font-normal">nutrition</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Nutritional Counseling' : 'Nutrición'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Dietary guidance' : 'Guía dietética'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-emerald-600 mt-1 font-normal">update</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Ongoing Clinical Follow-up' : 'Seguimiento Clínico'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Regular progress monitoring' : 'Monitoreo continuo'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-emerald-600 mt-1 font-normal">assignment</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{language === 'en' ? 'Personalized Plan' : 'Plan a Medida'}</h4>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Tailored treatment strategy' : 'Estrategia a medida'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 5: Wellness Therapies */}
                            <div id="wellness" className="bg-white rounded-2xl px-6 pb-6 pt-5 shadow-sm hover:shadow-md border border-slate-100 transition-all flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="size-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-3xl font-normal">bolt</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-tight">{language === 'en' ? 'Wellness Therapies' : 'Terapias de Bienestar'}</h3>
                                        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-1">{language === 'en' ? 'IVs, Injections & NAD+' : 'Sueros, Inyecciones y NAD+'}</p>
                                    </div>
                                </div>
                                <p className="text-slate-500 mb-3 text-sm leading-relaxed">
                                    {language === 'en'
                                        ? "Advanced wellness solutions to optimize your physical and mental vitality. Customized based on medical evaluation."
                                        : "Soluciones de bienestar para optimizar su vitalidad. Fórmulas personalizadas según evaluación médica."}
                                </p>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex gap-3">
                                        <span className="material-symbols-outlined text-cyan-600 text-sm mt-0.5">fitness_center</span>
                                        <div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="block text-sm font-bold text-slate-800">Athletic Boost</span>
                                            </div>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Performance & stamina' : 'Rendimiento y resistencia'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="material-symbols-outlined text-cyan-600 text-sm mt-0.5">water_drop</span>
                                        <div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="block text-sm font-bold text-slate-800">{language === 'en' ? 'Hangover Recovery' : 'Recuperación Resaca'}</span>
                                            </div>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Hydration & Detox' : 'Hidratación y Detox'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="material-symbols-outlined text-cyan-600 text-sm mt-0.5">shield_with_heart</span>
                                        <div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="block text-sm font-bold text-slate-800">Immune Plus</span>
                                            </div>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Flu & Allergy defense' : 'Defensa contra gripe y alergias'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="material-symbols-outlined text-cyan-600 text-sm mt-0.5">battery_charging_full</span>
                                        <div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="block text-sm font-bold text-slate-800">{language === 'en' ? "Myers' Cocktail" : "Cóctel Myers"}</span>
                                            </div>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Energy & Immune health' : 'Energía e Inmune'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="material-symbols-outlined text-cyan-600 text-sm mt-0.5">biotech</span>
                                        <div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="block text-sm font-bold text-slate-800">NAD+ Therapy</span>
                                            </div>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Cellular energy & anti-aging' : 'Energía celular y antienvejecimiento'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="material-symbols-outlined text-cyan-600 text-sm mt-0.5">vaccines</span>
                                        <div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="block text-sm font-bold text-slate-800">{language === 'en' ? 'Tri-Immune' : 'Tri-Inmune'}</span>
                                            </div>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Zinc + C + Glutathione' : 'Zinc + C + Glutatión'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="material-symbols-outlined text-cyan-600 text-sm mt-0.5">syringe</span>
                                        <div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="block text-sm font-bold text-slate-800">{language === 'en' ? 'Vitamin B12' : 'Vitamina B12'}</span>
                                            </div>
                                            <p className="text-xs text-slate-500">{language === 'en' ? 'Energy boost' : 'Impulso de energía'}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-slate-400 mt-6 pt-4 border-t border-slate-100 italic">
                                    {language === 'en' ? 'All therapies require medical evaluation.' : 'Todas las terapias requieren evaluación médica.'}
                                </p>
                            </div>
                        </div>

                        {/* Flyer Legal Footer */}
                        <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                                {language === 'en'
                                    ? "All services require prior medical evaluation. Treatments are individualized based on patient needs."
                                    : "Todos los servicios requieren evaluación médica previa. Los tratamientos son personalizados según las necesidades del paciente."}
                            </p>
                        </div>
                    </div>
                </section>



                {/* Community Section */}
                <section className="bg-white dark:bg-slate-900/50 py-20" >
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full z-0"></div>
                                <img
                                    className="relative z-10 rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3]"
                                    src="/medical-team.png"
                                    alt="Medical staff"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-slate-900 dark:text-white">
                                    {language === 'en' ? 'Dedicated to Excellence in Healthcare' : 'Dedicados a la Excelencia en la Atención Médica'}
                                </h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light">
                                    {language === 'en'
                                        ? 'At Ruiz Unger Medical Center, we combine professional medical expertise with genuine compassion. We are proud to be a trusted resource for the immigration community in Miami, providing USCIS certified exams alongside comprehensive primary care and accident rehabilitation services.'
                                        : 'En Ruiz Unger Medical Center, combinamos la experiencia médica profesional con una compasión genuina. Nos enorgullece ser un recurso de confianza para la comunidad de inmigrantes en Miami, brindando exámenes certificados por USCIS junto con servicios integrales de atención primaria y rehabilitación de accidentes.'}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12 mt-12 text-slate-900 dark:text-white">
                                    <div className="relative pl-16">
                                        <div className="absolute left-0 top-0 size-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-2xl">translate</span>
                                        </div>
                                        <h4 className="font-bold text-lg mb-1">{language === 'en' ? 'Bilingual Team' : 'Equipo Bilingüe'}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                            {language === 'en' ? 'English & Spanish fluent staff' : 'Personal con fluidez en Inglés y Español'}
                                        </p>
                                    </div>
                                    <div className="relative pl-16">
                                        <div className="absolute left-0 top-0 size-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                                        </div>
                                        <h4 className="font-bold text-lg mb-1">{language === 'en' ? 'USCIS Certified' : 'Certificado por USCIS'}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                            {language === 'en' ? 'Official Civil Surgeons' : 'Cirujanos Civiles Oficiales'}
                                        </p>
                                    </div>
                                    <div className="relative pl-16">
                                        <div className="absolute left-0 top-0 size-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-2xl">medical_services</span>
                                        </div>
                                        <h4 className="font-bold text-lg mb-1">{language === 'en' ? 'Modern Facility' : 'Instalación Moderna'}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                            {language === 'en' ? 'Latest medical technology' : 'Última tecnología médica'}
                                        </p>
                                    </div>
                                    <div className="relative pl-16">
                                        <div className="absolute left-0 top-0 size-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
                                        </div>
                                        <h4 className="font-bold text-lg mb-1">{language === 'en' ? 'Patient First' : 'El Paciente Primero'}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                            {language === 'en' ? 'Personalized care plans' : 'Planes de cuidado personalizados'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="location" className="max-w-[1200px] mx-auto px-6 py-20" >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-slate-900/40 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="p-10 md:p-16">
                            <h3 className="text-3xl font-extrabold mb-8 text-slate-900 dark:text-white">{language === 'en' ? 'Visit Our Miami Center' : 'Visite Nuestro Centro en Miami'}</h3>
                            <div className="space-y-8">
                                <div className="flex gap-5">
                                    <span className="material-symbols-outlined text-secondary bg-secondary/5 p-2 rounded-lg font-normal">location_on</span>
                                    <div>
                                        <p className="font-bold text-lg text-slate-800 dark:text-white">{language === 'en' ? 'Local Presence' : 'Presencia Local'}</p>
                                        <p className="text-slate-500 text-sm">8300 SW 8th St #107<br />Miami, FL 33144</p>
                                        <p className="text-[10px] font-extrabold text-primary mt-2 uppercase tracking-widest">{language === 'en' ? 'Free Patient Parking' : 'Estacionamiento Gratis para Pacientes'}</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <span className="material-symbols-outlined text-secondary bg-secondary/5 p-2 rounded-lg font-normal">schedule</span>
                                    <div>
                                        <p className="font-bold text-lg text-slate-800 dark:text-white">{language === 'en' ? 'Operating Hours' : 'Horas de Operación'}</p>
                                        <p className="text-slate-500 text-sm">
                                            {language === 'en'
                                                ? <>Mon - Fri: 10:00 AM - 7:00 PM<br />Sat: By Appointment Only<br />Sun: Closed</>
                                                : <>Lun - Vie: 10:00 AM - 7:00 PM<br />Sáb: Por Cita Solamente<br />Dom: Cerrado</>}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <span className="material-symbols-outlined text-secondary bg-secondary/5 p-2 rounded-lg font-normal">call</span>
                                    <div>
                                        <p className="font-bold text-lg text-slate-800 dark:text-white">{language === 'en' ? 'Connect With Us' : 'Contáctenos'}</p>
                                        <p className="text-slate-500 text-sm">Call: (786) 536-7728<br />Email: ruizungermd@outlook.com</p>
                                    </div>
                                </div>
                            </div>
                            <a
                                href="https://maps.google.com/?q=8300+SW+8th+St+%23107,+Miami,+FL+33144"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-12 bg-slate-900 text-white px-8 py-4 rounded-full font-bold w-full md:w-auto shadow-xl hover:bg-slate-800 transition-all inline-block text-center"
                            >
                                {language === 'en' ? 'Get Directions' : 'Obtener Direcciones'}
                            </a>
                        </div>
                        <div className="h-80 md:h-auto min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.224164808269!2d-80.3323087236504!3d25.76313360855214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9be9f874c7e3f%3A0xc6cb5a3d078b5e6b!2s8300%20SW%208th%20St%20%23107%2C%20Miami%2C%20FL%2033144!5e0!3m2!1sen!2sus!4v1706900000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                                className="w-full h-full object-cover"
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-[1200px] mx-auto px-6 pb-20" >
                    <div className="bg-primary rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent"></div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 relative z-10 leading-tight">
                            {language === 'en' ? 'Elevate Your Wellness Journey Today' : 'Eleve su Camino al Bienestar Hoy'}
                        </h2>
                        <p className="text-lg text-blue-50 mb-10 max-w-2xl mx-auto relative z-10 font-light">
                            {language === 'en'
                                ? 'Join our community of healthy, active patients. We accept most major insurances and offer transparent self-pay options.'
                                : 'Únase a nuestra comunidad de pacientes sanos y activos. Aceptamos la mayoría de los seguros principales y ofrecemos opciones de pago por cuenta propia transparentes.'}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                            <a href="tel:+17865367728" className="bg-secondary hover:bg-secondary/90 text-white px-10 py-4 rounded-full font-extrabold text-lg transition-all shadow-lg active:scale-95 text-center flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">call</span>
                                (786) 536-7728
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 pt-16 pb-8" >
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center gap-3 mb-6">
                                <img
                                    src="/logo.png"
                                    alt="Ruiz Unger Logo"
                                    className="h-10 w-auto object-contain bg-white rounded-lg p-1"
                                />
                                <span className="text-lg font-bold text-slate-900 dark:text-white whitespace-nowrap">
                                    Ruiz Unger <span className="font-light text-slate-400">Medical Center</span>
                                </span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                {language === 'en'
                                    ? 'Powering the energy of Miami through accessible medical excellence and compassionate community care since 2010.'
                                    : 'Impulsando la energía de Miami a través de una excelencia médica accesible y un cuidado comunitario compasivo desde 2010.'}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">{language === 'en' ? 'Care Pillars' : 'Pilares de Cuidado'}</h4>
                            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                                <li><a className="hover:text-primary transition-colors" href="#immigration">{language === 'en' ? 'Immigration Health' : 'Salud de Inmigración'}</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#accident">{language === 'en' ? 'Recovery Rehab' : 'Rehabilitación y Recuperación'}</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#wellness">{language === 'en' ? 'Vitality & Wellness' : 'Vitalidad y Bienestar'}</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#wellness">{language === 'en' ? 'IV Infusions' : 'Infusiones IV'}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">{language === 'en' ? 'Community' : 'Comunidad'}</h4>
                            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                                <li><a className="hover:text-primary transition-colors" href="#">{language === 'en' ? 'New Patient Center' : 'Centro de Nuevos Pacientes'}</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">{language === 'en' ? 'Insurance Plans' : 'Planes de Seguro'}</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">{language === 'en' ? 'Privacy First' : 'Privacidad Primero'}</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#location">{language === 'en' ? 'Contact Team' : 'Contactar al Equipo'}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">{language === 'en' ? 'Connect' : 'Conectar'}</h4>
                            <div className="flex gap-4">
                                <a className="size-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
                                    <span className="material-symbols-outlined text-lg font-normal">public</span>
                                </a>
                                <a className="size-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-secondary hover:text-white transition-all shadow-sm" href="#">
                                    <span className="material-symbols-outlined text-lg font-normal">share</span>
                                </a>
                                <a className="size-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
                                    <span className="material-symbols-outlined text-lg font-normal">mail</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            © 2026 Ruiz Unger Medical Center. Certified USCIS Civil Surgeons.
                        </p>
                        <div className="flex items-center gap-6">
                            <span className="text-xs font-extrabold text-secondary tracking-widest uppercase">Atención Bilingüe</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
