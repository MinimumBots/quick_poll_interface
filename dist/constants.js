"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS_UPDATE_SPAN = exports.FAMILY_PASS_PHRASE = exports.APP_LISTEN_PORT = void 0;
exports.APP_LISTEN_PORT = Number(process.env['APP_LISTEN_PORT'])
    || Number(process.env['PORT'])
    || 443;
exports.FAMILY_PASS_PHRASE = process.env['FAMILY_PASS_PHRASE'] || '';
exports.STATUS_UPDATE_SPAN = 300000; // Millisecond
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGVBQWUsR0FDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztPQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUMzQixHQUFHLENBQUM7QUFFRSxRQUFBLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFN0QsUUFBQSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsQ0FBRSxjQUFjIn0=