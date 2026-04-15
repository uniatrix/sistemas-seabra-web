# Checklist de mídias do site Seabra

Lista do que precisa ser gravado/fotografado para preencher os placeholders atuais do site. Cada item indica **onde será usado** e **especificações técnicas** sugeridas.

Formatos recomendados:
- **Vídeos:** MP4 (H.264), 1080p, ≤10MB cada. Para vídeos maiores, usar YouTube/Vimeo embed.
- **Fotos:** JPG ou PNG, 1920×1080 (paisagem) ou 1200×800, comprimidas para ≤300KB.
- **Caminho de upload:** `public/videos/` para vídeos, `public/images/` para fotos. Nome em kebab-case.

---

## 1. Sistema Pequenos Ruminantes (caprinos + ovinos)

Aplica-se aos 4 produtos: caprinos leite, caprinos corte, ovinos leite, ovinos corte. Pode reaproveitar a mesma mídia entre eles enquanto não houver versões específicas.

| # | Mídia | Onde aparece | Especificação |
|---|---|---|---|
| 1 | **Vídeo demonstrativo principal** | `LandingProofs` (bento grid) de cada landing | 60–90s, narrado, mostra dashboard → cadastro de animal → relatório |
| 2 | **Vídeo curto silencioso (loop)** | Hero do sub-hub `/pequenos-ruminantes` | 15s, sem áudio, autoplay, mostra telas em uso |
| 3 | **Screenshot — Dashboard principal** | `LandingProofs[0]` | PNG, 1920×1080, dados realistas (não Lorem) |
| 4 | **Screenshot — Cadastro/ficha de animal** | `LandingProofs[1]` | PNG, 1920×1080 |
| 5 | **Screenshot — Relatório/indicador** | `LandingProofs[2]` (BarChart3) | PNG, 1920×1080, gráficos visíveis |
| 6 | **Screenshot — Tela mobile (celular em campo)** | `LandingProofs[3]` (Smartphone) | PNG, 750×1334, mockup com mão segurando celular |
| 7 | **Foto — produtor usando o sistema no curral** | Sub-hub e seção "Quem é a Seabra" | JPG, 1920×1080, luz natural |
| 8 | **Ícone/ilustração caprino e ovino** | Hub `/pequenos-ruminantes` | SVG, monocromático |

## 2. Sistema Bovinos de Corte

| # | Mídia | Onde aparece | Especificação |
|---|---|---|---|
| 1 | **Vídeo demonstrativo principal** | `LandingProofs` em `/bovinos-corte` | 60–90s, narrado, foco em pesagem/lotes/GMD |
| 2 | **Vídeo curto silencioso (loop)** | Hero de `/bovinos-corte` | 15s, sem áudio, autoplay |
| 3 | **Screenshot — Dashboard de rebanho** | `LandingProofs[0]` | PNG, 1920×1080 |
| 4 | **Screenshot — Pesagem / GMD** | `LandingProofs[1]` | PNG, 1920×1080 |
| 5 | **Screenshot — Custo por arroba / financeiro** | `LandingProofs[2]` | PNG, 1920×1080 |
| 6 | **Screenshot — Mobile no curral** | `LandingProofs[3]` | PNG, 750×1334 |
| 7 | **Foto — pesagem ou manejo de bovinos** | Hero/About | JPG, 1920×1080 |
| 8 | **Ícone/ilustração bovino de corte** | Hub | SVG |

## 3. Home (institucional)

| # | Mídia | Onde aparece | Especificação |
|---|---|---|---|
| 1 | **Foto profissional do Felipe** | `AboutSection` "Quem é a Seabra" | JPG, 1200×1200, fundo neutro/escritório |
| 2 | **Vídeo institucional (opcional)** | `AboutSection` ou nova seção | 30s, Felipe falando à câmera |
| 3 | **OG image / banner social** | Compartilhamento WhatsApp/Facebook | PNG, 1200×630, com logo + tagline. **Atualmente usando `logo.png` como fallback — substituir.** |
| 4 | **Logos de clientes atualizados** | `LogosSection` (carrossel) | PNG transparente, altura 80px. Conferir se os 9 atuais em `public/images/logos/` estão nítidos |

## 4. Para o futuro (quando lançar)

### Bovinos Leiteiros (vaca leiteira)
Mesma lista do item 1 (Pequenos Ruminantes), adaptada para bovinos leiteiros: dashboard, controle leiteiro diário, manejo reprodutivo, custo por litro.

### Microchips e leitores eletrônicos (marketplace)
- Foto de cada produto físico em fundo branco (estúdio), múltiplos ângulos.
- Foto do produto **aplicado no animal** (brinco, bolus, leitor portátil em uso).
- Vídeo curto (15s) demonstrando leitura/aplicação.

### Catálogo de animais (classificados)
- Exemplo de card de animal: foto lateral em fundo neutro + ficha técnica visível.
- 1 animal exemplo por categoria (matriz caprino, reprodutor ovino, etc.).

---

## Como substituir os placeholders no código

Os placeholders atuais ficam em:

- [src/components/landing/LandingProofs.tsx](src/components/landing/LandingProofs.tsx) — bento grid de 4 quadros (3 prints + 1 vídeo).
- [src/components/home/ProofsSection.tsx](src/components/home/ProofsSection.tsx) — bento grid da home.

Quando as mídias estiverem prontas, substituir os ícones Lucide pelos `<Image>` / `<video>` reais. Se quiser, eu faço essa troca em uma nova rodada quando você me passar os arquivos.
